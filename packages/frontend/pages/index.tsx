import { ethers } from 'ethers';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useWeb3Context } from '../src/context';
import { GenericContract, GenericContract__factory } from '../src/contracts';
import moment, { min } from 'moment';
import signatures from '../config/signatures.json';

const Home: NextPage = () => {
  const { web3Provider, address, connect } = useWeb3Context();
  const [count, setCount] = useState<number>(1);
  const [contract, setContract] = useState<GenericContract | null>();
  const [preSaleDateTime, setPreSaleDateTime] = useState<Date | null>();
  const [publicSaleDateTime, setPublicSaleDateTime] = useState<Date | null>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setContract(
        GenericContract__factory.connect(
          process.env.PUBLIC_ADDRESS ?? '',
          web3Provider?.getSigner() ??
            new ethers.providers.Web3Provider(window.ethereum).getSigner(),
        ),
      );
    }
  }, [web3Provider]);

  useEffect(() => {
    if (contract) {
      const getPreSaleTime = async () => {
        return await contract.prSaleTime();
      };

      const getPublicSaleTime = async () => {
        return await contract.puSaleTime();
      };

      getPublicSaleTime().then((time) => {
        setPublicSaleDateTime(new Date(time.toNumber() * 1000));
      });

      getPreSaleTime().then((time) => {
        setPreSaleDateTime(new Date(time.toNumber() * 1000));
      });
    }
  }, [contract]);

  const onMintClick = async () => {
    if (web3Provider && contract && address) {
      let signature: string = signatures.hasOwnProperty(address)
        ? signatures[address.toLowerCase()]
        : signatures['default'];

      const mint = async (amount: number) =>
        moment.utc().isAfter(preSaleDateTime) &&
        moment.utc().isBefore(publicSaleDateTime) &&
        address
          ? contract.preSaleMint(amount, signature, {
              value: (
                (await contract.preSalePrice()).toNumber() * amount
              ).toString(),
            })
          : contract.pubSaleMint(amount, {
              value: (
                (await contract.pubSalePrice()).toNumber() * amount
              ).toString(),
            });

      mint(count).catch((e: any) => {
        let error: string = '';

        if (e.message) {
          error = e.message;
        }

        if (error.includes('AntiBot')) {
          toast.error(
            'We have detected that you are or using a bot. If you are not please contact the contract owner.',
          );
        } else if (error.includes('PubSaleNotStarted')) {
          toast.error('The public sale has not started yet!');
        } else if (error.includes('PreSaleNotStarted')) {
          toast.error('The sale has not started yet!');
        } else if (error.includes('PreSaleEnded')) {
          toast.error('The pre sale has ended!');
        } else if (error.includes('PubSaleEnded')) {
          toast.error('The public sale has ended!');
        } else if (error.includes('ExceedMaxAmount')) {
          toast.error(
            'You have exceeded the max number of tokens you can mint!',
          );
        } else if (error.includes('ExceedMaxSupply')) {
          toast.error('There are no tokens left to mint!');
        } else if (error.includes('ValueTooLow')) {
          toast.error('You have not given the correct amount of ETH!');
        } else if (error.includes('NotWhitelisted')) {
          toast.error(
            'You are not whitelisted! Wait for the public sale to start!',
          );
        } else {
          toast.error(e);
        }
      });

      // try {
      //   let transaction: ethers.ContractTransaction;
      //   if (
      //     moment.utc().isAfter(preSaleDateTime) &&
      //     moment.utc().isBefore(publicSaleDateTime) &&
      //     address
      //   ) {
      //     transaction = await contract.preSaleMint(count, signature, {
      //       value: (
      //         (await contract.preSalePrice()).toNumber() * count
      //       ).toString(),
      //     });
      //   } else {
      //     transaction = await contract.pubSaleMint(count, {
      //       value: (
      //         (await contract.pubSalePrice()).toNumber() * count
      //       ).toString(),
      //     });
      //   }
      //   toast.info('Successfully completed transaction!');
      // } catch (e: any) {
      //   let error: string = '';

      //   if (e.error) {
      //     if (e.error.data) {
      //       error = e.error.data.message as string;
      //     } else {
      //       error = e.error.message as string;
      //     }
      //   } else if (e.message) {
      //     error = e.message;
      //   }

      // if (error.includes('ExceedMaxMint')) {
      //   toast.error(
      //     'You have exceeded the maximum amount of tokens you can mint!',
      //   );
      // } else if (error.includes('ExceedMaxSupply')) {
      //   toast.error("The sale has ended. You can't mint any more tokens!");
      // } else if (error.includes('ValueTooLow')) {
      //   toast.error('You have sent an incorrect amount of ETH!');
      // } else if (
      //   error.includes('NotWhitelisted') ||
      //   error.includes('SaleNotStartedOrEnded')
      // ) {
      //   toast.error('The public sale has not started yet!');
      // } else if (error.includes('Nonce too high')) {
      //   toast.error('Nonce is too high!');
      // } else {
      //   toast.error(error);
      // }
      // }
    }
  };

  return (
    <div>
      <Head>
        <title>Generic NFT Minting dApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="pt-8 pb-4 text-center text-4xl font-semibold">
        Generic NFT Minting dApp
      </header>
      <main className="container mx-auto flex flex-col items-center">
        <button type="button" onClick={() => (connect ? connect() : {})}>
          Connect
        </button>
        <button type="button" onClick={onMintClick}>
          Mint
        </button>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721A, ERC721AInterface } from "../ERC721A";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620023a5380380620023a5833981810160405281019062000037919062000193565b81600290805190602001906200004f92919062000071565b5080600390805190602001906200006892919062000071565b50505062000376565b8280546200007f906200029b565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200022f565b62000206565b9050828152602081018484840111156200015157600080fd5b6200015e84828562000265565b509392505050565b600082601f8301126200017857600080fd5b81516200018a84826020860162000121565b91505092915050565b60008060408385031215620001a757600080fd5b600083015167ffffffffffffffff811115620001c257600080fd5b620001d08582860162000166565b925050602083015167ffffffffffffffff811115620001ee57600080fd5b620001fc8582860162000166565b9150509250929050565b60006200021262000225565b9050620002208282620002d1565b919050565b6000604051905090565b600067ffffffffffffffff8211156200024d576200024c62000336565b5b620002588262000365565b9050602081019050919050565b60005b838110156200028557808201518184015260208101905062000268565b8381111562000295576000848401525b50505050565b60006002820490506001821680620002b457607f821691505b60208210811415620002cb57620002ca62000307565b5b50919050565b620002dc8262000365565b810181811067ffffffffffffffff82111715620002fe57620002fd62000336565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61201f80620003866000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb4651461025d578063b88d4fde14610279578063c87b56dd14610295578063e985e9c5146102c5576100ea565b80636352211e146101df57806370a082311461020f57806395d89b411461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806318160ddd1461018957806323b872dd146101a757806342842e0e146101c3576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b610109600480360381019061010491906119ab565b6102f5565b6040516101169190611b81565b60405180910390f35b6101276103d7565b6040516101349190611b9c565b60405180910390f35b610157600480360381019061015291906119fd565b610469565b6040516101649190611b1a565b60405180910390f35b6101876004803603810190610182919061196f565b6104e5565b005b6101916105f0565b60405161019e9190611bbe565b60405180910390f35b6101c160048036038101906101bc9190611869565b6105fe565b005b6101dd60048036038101906101d89190611869565b61060e565b005b6101f960048036038101906101f491906119fd565b61062e565b6040516102069190611b1a565b60405180910390f35b61022960048036038101906102249190611804565b610644565b6040516102369190611bbe565b60405180910390f35b610247610714565b6040516102549190611b9c565b60405180910390f35b61027760048036038101906102729190611933565b6107a6565b005b610293600480360381019061028e91906118b8565b61091e565b005b6102af60048036038101906102aa91906119fd565b610971565b6040516102bc9190611b9c565b60405180910390f35b6102df60048036038101906102da919061182d565b610a10565b6040516102ec9190611b81565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103c057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103d057506103cf82610aa4565b5b9050919050565b6060600280546103e690611de3565b80601f016020809104026020016040519081016040528092919081815260200182805461041290611de3565b801561045f5780601f106104345761010080835404028352916020019161045f565b820191906000526020600020905b81548152906001019060200180831161044257829003601f168201915b5050505050905090565b600061047482610b0e565b6104aa576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104f08261062e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610558576040517f943f7b8c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610577610b48565b73ffffffffffffffffffffffffffffffffffffffff16141580156105a957506105a7816105a2610b48565b610a10565b155b156105e0576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105eb838383610b50565b505050565b600060015460005403905090565b610609838383610c02565b505050565b6106298383836040518060200160405280600081525061091e565b505050565b6000610639826110f3565b600001519050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106ac576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b60606003805461072390611de3565b80601f016020809104026020016040519081016040528092919081815260200182805461074f90611de3565b801561079c5780601f106107715761010080835404028352916020019161079c565b820191906000526020600020905b81548152906001019060200180831161077f57829003601f168201915b5050505050905090565b6107ae610b48565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610813576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060076000610820610b48565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166108cd610b48565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516109129190611b81565b60405180910390a35050565b610929848484610c02565b6109358484848461136f565b61096b576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b606061097c82610b0e565b6109b2576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006109bc6114fd565b90506000815114156109dd5760405180602001604052806000815250610a08565b806109e784611514565b6040516020016109f8929190611af6565b6040516020818303038152906040525b915050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000805482108015610b41575060046000838152602001908152602001600020600001601c9054906101000a900460ff16155b9050919050565b600033905090565b826006600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000610c0d826110f3565b90506000816000015173ffffffffffffffffffffffffffffffffffffffff16610c34610b48565b73ffffffffffffffffffffffffffffffffffffffff161480610c675750610c668260000151610c61610b48565b610a10565b5b80610cac5750610c75610b48565b73ffffffffffffffffffffffffffffffffffffffff16610c9484610469565b73ffffffffffffffffffffffffffffffffffffffff16145b905080610ce5576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1614610d4e576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610db5576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dc285858560016116c1565b610dd26000848460000151610b50565b6001600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160392506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550836004600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426004600085815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600184019050600073ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611083576000548110156110825782600001516004600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082602001516004600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505b5b50828473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110ec85858560016116c7565b5050505050565b6110fb6116f0565b6000829050600054811015611338576000600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050806040015161133657600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161461121a57809250505061136a565b5b60011561133557818060019003925050600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161461133057809250505061136a565b61121b565b5b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b60006113908473ffffffffffffffffffffffffffffffffffffffff166116cd565b156114f0578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026113b9610b48565b8786866040518563ffffffff1660e01b81526004016113db9493929190611b35565b602060405180830381600087803b1580156113f557600080fd5b505af192505050801561142657506040513d601f19601f8201168201806040525081019061142391906119d4565b60015b6114a0573d8060008114611456576040519150601f19603f3d011682016040523d82523d6000602084013e61145b565b606091505b50600081511415611498576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506114f5565b600190505b949350505050565b606060405180602001604052806000815250905090565b6060600082141561155c576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506116bc565b600082905060005b6000821461158e57808061157790611e46565b915050600a826115879190611cc8565b9150611564565b60008167ffffffffffffffff8111156115d0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156116025781602001600182028036833780820191505090505b5090505b600085146116b55760018261161b9190611cf9565b9150600a8561162a9190611e8f565b60306116369190611c72565b60f81b818381518110611672577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116ae9190611cc8565b9450611606565b8093505050505b919050565b50505050565b50505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff1681526020016000151581525090565b600061174661174184611bfe565b611bd9565b90508281526020810184848401111561175e57600080fd5b611769848285611da1565b509392505050565b60008135905061178081611f8d565b92915050565b60008135905061179581611fa4565b92915050565b6000813590506117aa81611fbb565b92915050565b6000815190506117bf81611fbb565b92915050565b600082601f8301126117d657600080fd5b81356117e6848260208601611733565b91505092915050565b6000813590506117fe81611fd2565b92915050565b60006020828403121561181657600080fd5b600061182484828501611771565b91505092915050565b6000806040838503121561184057600080fd5b600061184e85828601611771565b925050602061185f85828601611771565b9150509250929050565b60008060006060848603121561187e57600080fd5b600061188c86828701611771565b935050602061189d86828701611771565b92505060406118ae868287016117ef565b9150509250925092565b600080600080608085870312156118ce57600080fd5b60006118dc87828801611771565b94505060206118ed87828801611771565b93505060406118fe878288016117ef565b925050606085013567ffffffffffffffff81111561191b57600080fd5b611927878288016117c5565b91505092959194509250565b6000806040838503121561194657600080fd5b600061195485828601611771565b925050602061196585828601611786565b9150509250929050565b6000806040838503121561198257600080fd5b600061199085828601611771565b92505060206119a1858286016117ef565b9150509250929050565b6000602082840312156119bd57600080fd5b60006119cb8482850161179b565b91505092915050565b6000602082840312156119e657600080fd5b60006119f4848285016117b0565b91505092915050565b600060208284031215611a0f57600080fd5b6000611a1d848285016117ef565b91505092915050565b611a2f81611d2d565b82525050565b611a3e81611d3f565b82525050565b6000611a4f82611c2f565b611a598185611c45565b9350611a69818560208601611db0565b611a7281611f7c565b840191505092915050565b6000611a8882611c3a565b611a928185611c56565b9350611aa2818560208601611db0565b611aab81611f7c565b840191505092915050565b6000611ac182611c3a565b611acb8185611c67565b9350611adb818560208601611db0565b80840191505092915050565b611af081611d97565b82525050565b6000611b028285611ab6565b9150611b0e8284611ab6565b91508190509392505050565b6000602082019050611b2f6000830184611a26565b92915050565b6000608082019050611b4a6000830187611a26565b611b576020830186611a26565b611b646040830185611ae7565b8181036060830152611b768184611a44565b905095945050505050565b6000602082019050611b966000830184611a35565b92915050565b60006020820190508181036000830152611bb68184611a7d565b905092915050565b6000602082019050611bd36000830184611ae7565b92915050565b6000611be3611bf4565b9050611bef8282611e15565b919050565b6000604051905090565b600067ffffffffffffffff821115611c1957611c18611f4d565b5b611c2282611f7c565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611c7d82611d97565b9150611c8883611d97565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611cbd57611cbc611ec0565b5b828201905092915050565b6000611cd382611d97565b9150611cde83611d97565b925082611cee57611ced611eef565b5b828204905092915050565b6000611d0482611d97565b9150611d0f83611d97565b925082821015611d2257611d21611ec0565b5b828203905092915050565b6000611d3882611d77565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611dce578082015181840152602081019050611db3565b83811115611ddd576000848401525b50505050565b60006002820490506001821680611dfb57607f821691505b60208210811415611e0f57611e0e611f1e565b5b50919050565b611e1e82611f7c565b810181811067ffffffffffffffff82111715611e3d57611e3c611f4d565b5b80604052505050565b6000611e5182611d97565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611e8457611e83611ec0565b5b600182019050919050565b6000611e9a82611d97565b9150611ea583611d97565b925082611eb557611eb4611eef565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611f9681611d2d565b8114611fa157600080fd5b50565b611fad81611d3f565b8114611fb857600080fd5b50565b611fc481611d4b565b8114611fcf57600080fd5b50565b611fdb81611d97565b8114611fe657600080fd5b5056fea264697066735822122016cf991cc52a3ad360c674e15a62c70c78189b3e6a41a8e82fa6ecdb07dbb67f64736f6c63430008040033";

export class ERC721A__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721A> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721A>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721A {
    return super.attach(address) as ERC721A;
  }
  connect(signer: Signer): ERC721A__factory {
    return super.connect(signer) as ERC721A__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AInterface {
    return new utils.Interface(_abi) as ERC721AInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721A {
    return new Contract(address, _abi, signerOrProvider) as ERC721A;
  }
}

export { testnetMetadataRpc } from './testnet';

export const accounts = {
  account1: {
    secretKey: '874578010603af8e93b44bfc1d13b32830d0dbca6c89f28ccdc662afd3cdc824',
    publicKey: '61b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d',
    address: '5EGoFA95omzemRssELLDjVenNZ68aXyUeqtKQScXSEBvVJkr',
  },
  account2: {
    secretKey: '6f850d17c2bf64478a2aac860fe9c23a48d322f12932c43fe90704553b7b84fd',
    publicKey: '9f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f0254',
    address: '5Ffp1wJCPu4hzVDTo7XaMLqZSvSadyUQmxWPDw74CBjECSoq',
  },
  account3: {
    secretKey: 'ff2f0c73e7e8a34ba80401efa06f16cbb3406ca1f04b4fc618bc937643eef498',
    publicKey: 'd472bd6e0f1f92297631938e30edb682208c2cd2698d80cf678c53a69979eb9f',
    address: '5GsG6P9EqkbmTrM1GE5bcQx9nsSq74KueiLa1kNZiwagFxW4',
  },
  account4: {
    secretKey: '1c096bd907cc0149661a153431004ac40743330f9f0a2d03627628e16eeda1a8',
    publicKey: '7788327c695dca4b3e649a0db45bc3e703a2c67428fce360e61800cc4248f4f7',
    address: '5EmS1nuXogd8JXCUfyMjYBZ3MNbvPSBB4uNRjKGFS6E68YbK',
  },
  default: {
    secretKey: '0000000000000000000000000000000000000000000000000000000000000000',
    publicKey: '3b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29',
    address: '5DQcDYQ3wwobcrJ5aE5CzGp34ZWYNeYfYZ1yLbPiU2RcSvwm',
  },
};

export const rawTx = {
  transfer: {
    signed:
      '0x4902840061b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d00b6d868a11d202b56df1959f5d5f81f44ce1f95c8e70424b17080ea869d1c39d453f16c38fbef600a636c9a62a49ede5ee695a1822faf2f94fcfbb184a4254009d5012103000403009f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f02540bfadb9bbae251',
    unsigned:
      '0xa80403009f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f02540bfadb9bbae251d501210300be23000008000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d',
    westendSigned:
      '0x4502840061b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d0021074cd94f360122060446aec29b8d501bd4f77100efd3907d7b5cd389695e9b04943b840736a2dc8278f514b7af8f1673cb2a93701936c1edff67b0daf3e204d5012103000403009f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f02540700e40b5402',
    westendSigned2:
      '0x39028400a5fbb8273a1be98ac37984b57cd3575feb5a696cf21f0dfe2b5c092862fed89500614470d1964f1139310f358d0c6b0595d4bf22647707644e23d362f4efdff12e9bcab20a6601f247caf17b1fbe4241283a6b05cbee1b1899ad6d3ae3ff5c7f0a16000400040300fac05f4f6b35c0b4e45784c2a395b97e6ea66a830b0b4cce94a8e83a85fe951b02c2eb0b',
  },
  stake: {
    signed:
      '0x4d02840061b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d0071858cd3a8db8e1903769108ee1be4ee1ccc8764129dde75bd64a8fbb16f8c96c90758b800d00fd10e40899251cf4644c73fdd1f9fe653fd9ec34a34a71e380dd5012103000600009f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f02540bfadb9bbae25100',
    unsigned:
      '0xac0600009f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f02540bfadb9bbae25100d501210300be23000008000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d',
    signedAlt:
      '0xcd02840061b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d00e4842614d3271515f20c794a3f00669c15673ee56a7b4d9dfa901f7792445dfc0919a0de98b4b390806a66ad4f764a57f6c786659809921f1dd87a3671d81507d5012103000600009f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f02540bfadb9bbae251039f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f0254',
    unsignedAlt:
      '0x2d010600009f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f02540bfadb9bbae251039f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f0254d501210300be23000008000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d',
  },
  addProxy: {
    signed:
      '0x3d02840061b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d00ac4869cecac00b5ce0e9d934fbf6cf40114ecdb377553e96ad28d730185381c94ce571dffd0c741ec1c5a386a7f2f3efb230bae162d44adabc4a17ab17a4060cd5012103001601d472bd6e0f1f92297631938e30edb682208c2cd2698d80cf678c53a69979eb9f0000000000',
    unsigned:
      '0x9c1601d472bd6e0f1f92297631938e30edb682208c2cd2698d80cf678c53a69979eb9f0000000000d501210300be23000008000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d',
  },
  anonymous: {
    signed:
      '0xc501840061b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d00d70bc0bf567bfa9ec20b520ccb99b62ac66d20d664e493523084bb66dfd2824321f890f3d877c42f6ffa39801f99089daad4b963de7d71e67f16e958cd78de0ed501210300160400000000000000',
    unsigned:
      '0x24160400000000000000d501210300be23000008000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d',
    batch: ['0x160400000000000000', '0x160400000000000100'],
  },
  batch: {
    signed:
      '0x1502840061b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d0040ddb0cb7d290d14cd17f4d96f4261233d7add26505cb35bbbb93692467b88d31ba5e7d16fc8b3fd7a6e496d3c4a101dbc2a97f4ee81b2a16f4be672fdf1fd043502000010000c160400000000000000160400000000000100160400000000000200',
    unsigned:
      '0x7810000c16040000000000000016040000000000010016040000000000020035020000be23000008000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423eef5a7eb51dc6e777de2b0232119c90c5782bb8b4704888244276b94ea659f60b',
  },
  proxy: {
    signed:
      '0xd9028400d472bd6e0f1f92297631938e30edb682208c2cd2698d80cf678c53a69979eb9f0016e86cc4888bacd331674ce489e679c9d72f345a1e7fc247eb7bf1abe764c6aefb20099cc2f307020841b3720441874fd6738b6ba4097c33443c5a8a22559100d501210300160061b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d01000403009f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f02540bfadb9bbae251',
    unsigned:
      '0x3901160061b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d01000403009f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f02540bfadb9bbae251d501210300be23000008000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d',
    transferCall: '0x0503009f7b0675db59d19b4bd9c8c72eaabba75a9863d02b30115b8b3c3ca5c20f02540bfadb9bbae251',
  },
  unstake: {
    signed:
      '0xc501840061b18c6dc02ddcabdeac56cb4f21a971cc41cc97640f6f85b073480008c53a0d008cdb9178570210988436b9e274cd40c2e4dd5a7a36c4b4ca3026d331b27ce4d6f01c4757473559d3af5edbc4aa4d78abfbe4e42b36828fdeb8e6780353b2b009d50121030006020b00203d88792d',
    unsigned:
      '0x2406020b00203d88792dd501210300be23000008000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d',
  },
};

export const jsonTransactions = {
  transfer:
    '{"id":"0xecb860905342cf985b39276a07d6e6696746de4623c07df863f69cba153f939a","sender":"5EGoFA95omzemRssELLDjVenNZ68aXyUeqtKQScXSEBvVJkr","referenceBlock":"0x149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d","blockNumber":3933,"genesisHash":"0x2b8d4fdbb41f4bc15b8a7ec8ed0687f2a1ae11e0fc2dc6604fa962a9421ae349","nonce":200,"specVersion":9100,"transactionVersion":7,"eraPeriod":64,"chainName":"Polkadot","tip":0,"to":"5Ffp1wJCPu4hzVDTo7XaMLqZSvSadyUQmxWPDw74CBjECSoq","amount":"1000000000000"}',
  proxyTransfer:
    '{"id":"0x31ce82eb3d76a2d9814ad2f9499195a3bd9d2b16489834f8fd1c5615d9f1897f","sender":"5GsG6P9EqkbmTrM1GE5bcQx9nsSq74KueiLa1kNZiwagFxW4","referenceBlock":"0x149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d","blockNumber":3933,"genesisHash":"0x2b8d4fdbb41f4bc15b8a7ec8ed0687f2a1ae11e0fc2dc6604fa962a9421ae349","nonce":200,"specVersion":9100,"transactionVersion":7,"eraPeriod":64,"chainName":"Polkadot","tip":0,"owner":"5EGoFA95omzemRssELLDjVenNZ68aXyUeqtKQScXSEBvVJkr","forceProxyType":"Any","to":"5Ffp1wJCPu4hzVDTo7XaMLqZSvSadyUQmxWPDw74CBjECSoq","amount":90034235235322}',
  walletInitialization:
    '{"id":"0x181d71aa09c861b88b44c6252f8c68bf66d5bbad3b6ec551bbb1e715b6f8bc28","sender":"5EGoFA95omzemRssELLDjVenNZ68aXyUeqtKQScXSEBvVJkr","referenceBlock":"0x149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d","blockNumber":3933,"genesisHash":"0x2b8d4fdbb41f4bc15b8a7ec8ed0687f2a1ae11e0fc2dc6604fa962a9421ae349","nonce":200,"specVersion":9100,"transactionVersion":7,"eraPeriod":64,"chainName":"Polkadot","tip":0,"owner":"5GsG6P9EqkbmTrM1GE5bcQx9nsSq74KueiLa1kNZiwagFxW4","proxyType":"Any","delay":"0"}',
  staking:
    '{"id":"0xd95bb6cef42b931e0ee45b87a57dac7d42108e3b6798fd3788758482bbd69ff1","sender":"5EGoFA95omzemRssELLDjVenNZ68aXyUeqtKQScXSEBvVJkr","referenceBlock":"0x149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d","blockNumber":3933,"genesisHash":"0x2b8d4fdbb41f4bc15b8a7ec8ed0687f2a1ae11e0fc2dc6604fa962a9421ae349","nonce":200,"specVersion":9100,"transactionVersion":7,"eraPeriod":64,"chainName":"Polkadot","tip":0,"controller":"5Ffp1wJCPu4hzVDTo7XaMLqZSvSadyUQmxWPDw74CBjECSoq","amount":"50000000000000","payee":"Staked"}',
  stakingPayee:
    '{"id":"0x5e308428590cd19f576d7a3836b9f661633dd3a19025a7f0d26ed27cbf73b408","sender":"5EGoFA95omzemRssELLDjVenNZ68aXyUeqtKQScXSEBvVJkr","referenceBlock":"0x149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d","blockNumber":3933,"genesisHash":"0x2b8d4fdbb41f4bc15b8a7ec8ed0687f2a1ae11e0fc2dc6604fa962a9421ae349","nonce":200,"specVersion":9100,"transactionVersion":7,"eraPeriod":64,"chainName":"Polkadot","tip":0,"controller":"5Ffp1wJCPu4hzVDTo7XaMLqZSvSadyUQmxWPDw74CBjECSoq","amount":"50000000000000","payee":"5Ffp1wJCPu4hzVDTo7XaMLqZSvSadyUQmxWPDw74CBjECSoq"}',
  unstaking:
    '{"id":"0xcfc19a1c80041f807c321d381579bbfddbf0a76713d6d631e27d4ddda89f3699","sender":"5EGoFA95omzemRssELLDjVenNZ68aXyUeqtKQScXSEBvVJkr","referenceBlock":"0x149799bc9602cb5cf201f3425fb8d253b2d4e61fc119dcab3249f307f594754d","blockNumber":3933,"genesisHash":"0x2b8d4fdbb41f4bc15b8a7ec8ed0687f2a1ae11e0fc2dc6604fa962a9421ae349","nonce":200,"specVersion":9100,"transactionVersion":7,"eraPeriod":64,"chainName":"Polkadot","tip":0,"amount":"50000000000000"}',
};

export const blockHash = {
  block1: '0xc5e877848888006015ac403bbdaf84a2da0d79f88798b8239df19a3d471b6a8e',
  block2: '0xc5e877848888006015ac403bbdaf84a2da0d79f88798b8239df19a3d471b6a8e',
};

export const signatures = {
  signature1:
    '0xaf8312fa0d261c003fc3779559ac914c91bd062f249ef8d49911c40aa8b71b4d289a75a7860cd31046a125fa286368c6cfb7c3ca246072f18b31b88965485708',
  signature2:
    '0xaf8312fa0d261c003fc3779559ac914c91bd062f249ef8d49911c40aa8b71b4d289a75a7860cd31046a125fa286368c6cfb7c3ca246072f18b31b88965485708ff',
  signature3:
    '0xaf8312fa0d261c003fc3779559ac914c91bd062f249ef8d49911c40aa8b71b4d289a75a7860cd31046a125fa286368c6cfb7c3ca246072f18b31b88965485708ffff',
};

export const txIds = {
  id1: '0x1cbf1722ad5c3dcb981d48fd97f0520c7e5683d02a03a8a696208d8fe950299f',
  id2: '0xd95bb6cef42b931e0ee45b87a57dac7d42108e3b6798fd3788758482bbd69ff1',
};

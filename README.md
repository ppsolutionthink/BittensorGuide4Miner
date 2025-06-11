# BittensorGuide4Miner
Bittensor Guide For Miner

by @ppsolutionthink

### Prerequirements
- python3.10
- python3.10-venv
- python3-pip

``` 
$ alias python=python3
```

``` 
$ python -m venv venv
$ source venv/bin/activate
```

### Install `btcli`
``` 
$ pip install bittensor-cli
```

#### check `btcli` version
```
$ btcli --version
```

#### check `configuration`
```
$ btcli config --help
```
(~/.bittensor/config.yml)

### Create wallet
```
$ btcli wallet create
```

```
$ btcli wallet list
```

```
Wallets
├── Coldkey jeipi  ss58_address 5DCUWbfucE2JjnnXRoXUHkv1GuA3nRr6USKRm2FUkLaBysZW
│   └── Hotkey jeipi  ss58_address 5HH8ZHD5aU2SF6XU9vubZtWwvrGRgSY3dKrwK9A1a8wpSvcp
│       
└── Coldkey jeipi_coldkey  ss58_address 5HKpjyPcnwukwQsXGciXxTDtDgpqeThEm8UvT2D3zSnVUWC4
    └── Hotkey test_hotkey  ss58_address 5Cyp97FDdoEyg8eugzxPihAoJG93mqfgkAMH4m3dtfqyoTKJ
```

```
$ btcli wallet balance
```

```
                                                                     Wallet Coldkey Balance                                                                                   
                                                                          Network: test                                                                                       
                                                                                                                                                                              
    Wallet Name     Coldkey Address                                    Free Balance   Staked Value   Staked (w/slippage)   Total Balance   Total (w/slippage)                 
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                 
    jeipi           5DCUWbfucE2JjnnXRoXUHkv1GuA3nRr6USKRm2FUkLaBysZW       ‎0.0995 τ‎       ‎0.0000 τ‎              ‎0.0000 τ‎        ‎0.0995 τ‎             ‎0.0995 τ‎                 
                                                                                                                                                                              
                                                                                                                                                                              
                                                                                                                                                                              
    Total Balance                                                          ‎0.0995 τ‎       ‎0.0000 τ‎              ‎0.0000 τ‎        ‎0.0995 τ‎             ‎0.0995 τ‎                 
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                 

```

```
$ btcli wallet overview
```

```
                                                                                 Wallet                                                                                  
                                                                                                                                                                         
                                                        jeipi : 5DCUWbfucE2JjnnXRoXUHkv1GuA3nRr6USKRm2FUkLaBysZW                                                         
                                                                              Network: test                                                                              
Subnet: 261: ethiopic_ko ኰ                                                                                                                                               
                                                                                                                                                                         
  COLDKEY       HOTKEY        UID     ACTI…   STAKE(ኰ)       RANK      TRUST   CONSEN…   INCENT…   DIVIDE…   EMISSI…    VTRUST   VP…   UPD…   AXON            HOTKEY_S…  
 ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
  jeipi         jeipi         89       True       0.00       0.00       0.00      0.00      0.00      0.00    0.0000      0.00         1743   172.255.148.…   5HH8ZHD5…  
 ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
                              1                 0.00 ኰ     0.0000     0.0000    0.0000    0.0000    0.0000        ρ0    0.0000                                           
                                                                                                                                                                         

```


### setup testnet
```
$ btcli config set
```
network : 4 -> test

### some commands
```
$ btcli subnet list
```

```
$ btcli subnet show
```

### registering
```
$ btcli subnet register
```


- `hotkey`: is for mining and validation
- `coldkey`: is for everything else







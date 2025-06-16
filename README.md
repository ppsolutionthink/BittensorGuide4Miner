# BittensorGuide4Miner
Bittensor Guide For Miner by @ppsolutionthink


**Bittensor Blockchain Explorer** https://taostats.io/
### Prerequirements
- python3.10
- python3.10-venv
- python3-pip

``` 
(optional)
$ alias python=python3
```

``` 
(optional)
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
                                                                                                                                                        
                                                                        Subnets                                                                         
                                                                     Network: test                                                                      
                                                                                                                                                        
                                                                                                                                                        
        ┃                        ┃ Price        ┃ Market Cap  ┃              ┃                          ┃               ┃                 ┃             
 Netuid ┃ Name                   ┃ (Τ_in/α_in)  ┃ (α * Price) ┃ Emission (Τ) ┃ P (Τ_in, α_in)           ┃ Stake (α_out) ┃ Supply (α)      ┃ Tempo (k/n) 
━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━
   0    │ τ root                 │ 1.0000 τ/Τ‎   │ τ 5.01m     │ τ 0.0000     │ -, -                     │ Τ‎ 2.99m       │ 5.01m Τ‎ /21M    │ -/-         
  277   │ इ muv                  │ 0.4092 τ/इ‎   │ τ 834.93k   │ τ 0.4155     │ τ 346.91k, 847.74k इ‎     │ 1.19m इ‎       │ 2.04m इ‎ /21M    │ 83/99       
   3    │ γ templar              │ 0.1314 τ/γ‎   │ τ 280.04k   │ τ 0.1583     │ τ 154.32k, 1.17m γ‎       │ 956.73k γ‎     │ 2.13m γ‎ /21M    │ 9/99        
  119   │ Ⲃ vida                 │ 0.0913 τ/Ⲃ‎   │ τ 179.94k   │ τ 0.1145     │ τ 87.32k, 956.50k Ⲃ‎      │ 1.01m Ⲃ‎       │ 1.97m Ⲃ‎ /21M    │ 25/99       
   13   │ ν dataverse            │ 0.0519 τ/ν‎   │ τ 106.63k   │ τ 0.0594     │ τ 48.40k, 931.98k ν‎      │ 1.12m ν‎       │ 2.05m ν‎ /21M    │ 19/99       
   1    │ α apex                 │ 0.0271 τ/α‎   │ τ 50.83k    │ τ 0.0365     │ τ 31.91k, 1.18m α‎        │ 698.79k α‎     │ 1.88m α‎ /21M    │ 7/99        
  255   │ ዉ ethiopic_wu          │ 0.0179 τ/ዉ‎   │ τ 32.97k    │ τ 0.0154     │ τ 15.69k, 877.68k ዉ‎      │ 966.60k ዉ‎     │ 1.84m ዉ‎ /21M    │ 61/99       
  250   │ ኤ ethiopic_glottal_e   │ 0.0153 τ/ኤ‎   │ τ 26.88k    │ τ 0.0122     │ τ 10.59k, 692.14k ኤ‎      │ 1.07m ኤ‎       │ 1.76m ኤ‎ /21M    │ 56/99       
   9    │ ι pretrain             │ 0.0095 τ/ι‎   │ τ 19.34k    │ τ 0.0106     │ τ 8.90k, 941.28k ι‎       │ 1.10m ι‎       │ 2.04m ι‎ /21M    │ 15/99       
  117   │ Ⲁ alfa                 │ 0.0099 τ/Ⲁ‎   │ τ 18.53k    │ τ 0.0088     │ τ 8.89k, 894.94k Ⲁ‎       │ 969.46k Ⲁ‎     │ 1.86m Ⲁ‎ /21M    │ 23/99       
   25   │ א protein              │ 0.0064 τ/א‎   │ τ 13.85k    │ τ 0.0074     │ τ 7.79k, 1.21m א‎         │ 943.03k א‎     │ 2.15m א‎ /21M    │ 31/99       
  276   │ आ devanagari_aa        │ 0.0080 τ/आ‎   │ τ 13.73k    │ τ 0.0063     │ τ 4.28k, 531.65k आ‎       │ 1.18m आ‎       │ 1.71m आ‎ /21M    │ 82/99       
  138   │ Ⰴ glagolitic_dobro     │ 0.0073 τ/Ⰴ‎   │ τ 12.64k    │ τ 0.0058     │ τ 4.76k, 653.96k Ⰴ‎       │ 1.08m Ⰴ‎       │ 1.74m Ⰴ‎ /21M    │ 44/99       
  281   │ ऋ DogeTAO              │ 0.0023 τ/ऋ‎   │ τ 4.68k     │ τ 0.0021     │ τ 2.13k, 932.47k ऋ‎       │ 1.11m ऋ‎       │ 2.05m ऋ‎ /21M    │ 87/99       
  214   │ ᄃ hangul_rieul        │ 0.0026 τ/ᄃ‎  │ τ 4.36k     │ τ 0.0010     │ τ 919.56, 348.30k ᄃ‎     │ 1.30m ᄃ‎      │ 1.65m ᄃ‎ /21M   │ 20/99       
  275   │ अ Patrol               │ 0.0019 τ/अ‎   │ τ 3.11k     │ τ 0.0009     │ τ 903.23, 485.74k अ‎      │ 1.19m अ‎       │ 1.67m अ‎ /21M    │ 81/99       
   64   │ ش chutes               │ 0.0018 τ/ش‎   │ τ 3.02k     │ τ 0.0009     │ τ 777.70, 420.96k ش‎      │ 1.21m ش‎       │ 1.63m ش‎ /21M    │ 70/99       
   18   │ σ cortex               │ 0.0014 τ/σ‎   │ τ 2.22k     │ τ 0.0008     │ τ 675.94, 497.75k σ‎      │ 1.14m σ‎       │ 1.63m σ‎ /21M    │ 24/99       
   4    │ δ targon               │ 0.0010 τ/δ‎   │ τ 1.96k     │ τ 0.0009     │ τ 1.04k, 997.08k δ‎       │ 890.05k δ‎     │ 1.89m δ‎ /21M    │ 10/99       
  ...   │ ...                   │ ...                   │ ...           │ ...       │ ...                               │ ...                   │ ...       │ ...      
────────┼────────────────────────┼──────────────┼─────────────┼──────────────┼──────────────────────────┼───────────────┼─────────────────┼─────────────
  375   │                        │ τ 693.3957   │             │ τ 0.9994     │ τ 872.64k/4.73m (18.44%) │               │                 │             

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







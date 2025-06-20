# RedTeam(NetUID: 61)
## 1. Install RedTeam Subnet repository.
``` bash
git clone https://github.com/RedTeamSubnet/RedTeam
cd RedTeam
pip install -e .
```

-----------------------

## 2. Install PM2 Process Manager
> nvm, node.js, npm, pm2

``` bash
# Install NVM (Node Version Manager):
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# Activate NVM:
source ~/.bashrc

# Check NVM version:
nvm --version

# Install Node.js and npm:
nvm install --latest-npm --alias=default
nvm install default
# Set the default Node.js:
nvm use default

# Check Node.js and npm versions:
node --version
npm --version

# Install PM2 globally with logrotate:
npm install -g pm2
pm2 install pm2-logrotate

# Check PM2 version:
pm2 --version
```

## 3. Start the miner node
> Subnet must be registered. NEEDS **TAO** TOKEN

### Option1: direct python
``` bash
python -m neurons.miner.miner \
    --netuid 61 \
    --wallet.name "btwall_1" \
    --wallet.hotkey "bthotkey_1" \	
    --axon.port "8088" \
    --subtensor.network finney \
    --wallet.path "/workspace/wallets/"
```

Oneline:
``` bash
python -m neurons.miner.miner --netuid 61 --wallet.name "btwall_1" --wallet.hotkey "bthotkey_1" --axon.port "8088" --subtensor.network finney --wallet.path "/workspace/wallets/"
```
### Option2: pm2
``` bash
pm2 start python --name "miner_1" \
    -- -m neurons.miner.miner \
    --netuid 61 \
    --wallet.name "btwall_1" \
    --wallet.hotkey "bthotkey_1" \
    --axon.port "8088" \
    --subtensor.network finney \
    --wallet.path "/workspace/wallets/"
```

Oneline:
``` bash
pm2 start python --name "miner_1" -- -m neurons.miner.miner --netuid 61 --wallet.name "btwall_1" --wallet.hotkey "bthotkey_1" --axon.port "8088" --subtensor.network finney --wallet.path "/workspace/wallets/"
```

> **More flags**
**--logging.trace** - Enable trace logging
**--logging.debug** - Enable debug logging

Full cmd - Oneline
```
python -m neurons.miner.miner --netuid 61 --wallet.name "btwall_1" --wallet.hotkey "bthotkey_1" --axon.port "8088" --subtensor.network finney --wallet.path "/workspace/wallets/" --logging.trace --logging.debug
```

```
pm2 start python --name "miner_1" -- -m neurons.miner.miner --netuid 61 --wallet.name "btwall_1" --wallet.hotkey "bthotkey_1" --axon.port "8088" --subtensor.network finney --wallet.path "/workspace/wallets/" --logging.trace --logging.debug
```

**Useful options**
``` bash
pm2 stop miner_1
```

``` bash
pm2 delete miner_1
```

``` bash
pm2 list
```

``` bash
pm2 status
```

``` bash
pm2 logs miner_1
```


**Example Log**
``` bash
{'ab_sniffer_v1': {'name': 'ab_sniffer_v1', 'description': 'Detect the driver type of the framework using a single detection.js script', 'challenge_incentive_weight': 0.3, 'target': 'redteam_core.challenge_pool.ab_sniffer_v1.controller.ABSController', 'comparer': 'redteam_core.challenge_pool.ab_sniffer_v1.comparer.ABSComparer', 'challenge_manager': 'redteam_core.challenge_pool.ab_sniffer_v1.challenge_manager.ABSChallengeManager', 'max_unique_commits': 15, 'behavior_scaling_factor': 0.1, 'challenge_solve_timeout': 60, 'docker_run_timeout': 900, 'num_tasks': 1, 'challenge_container_run_kwargs': {'name': 'ab_sniffer_v1', 'privileged': True, 'environment': {'RT_CFG_RAND_SEED': 'abcdef1234567890'}}, 'miner_container_run_kwargs': {'cpu_count': 4, 'mem_limit': '12g', 'network': 'redteam_local', 'environment': {'CHALLENGE_NAME': 'ab_sniffer_v1'}}, 'reset_challenge': True, 'protocols': {'challenger': 'http', 'challenger_ssl_verify': False, 'miner': 'http', 'miner_ssl_verify': False}, 'resource_limits': {'num_cpus': 4, 'mem_limit': '12g'}, 'environment': {'ENV': 'PRODUCTION'}, 'baseline_reference_comparison_docker_hub_ids': ['redteamsubnet61/base_absv1_image1@sha256:63d7b294cd3b1ad6c798f47490c8b5f46cb5785867ec9d10159c0902d27ee6f4']}, 'humanize_behaviour_v4': {'name': 'humanize_behaviour_v4', 'description': 'Imitate human-like behaviour for given UI tasks', 'challenge_incentive_weight': 0.7, 'target': 'redteam_core.challenge_pool.humanize_behaviour_v4.controller.HBController', 'comparer': 'redteam_core.challenge_pool.humanize_behaviour_v4.comparer.HBComparer', 'challenge_manager': 'redteam_core.challenge_pool.humanize_behaviour_v4.challenge_manager.HBChallengeManager', 'max_unique_commits': 15, 'behavior_scaling_factor': 0.1, 'challenge_solve_timeout': 60, 'docker_run_timeout': 900, 'num_tasks': 1, 'challenge_container_run_kwargs': {'name': 'humanize_behaviour_v4', 'privileged': True}, 'miner_container_run_kwargs': {'cpu_count': 4, 'mem_limit': '12g', 'network': 'redteam_local', 'environment': {'CHALLENGE_NAME': 'humanize_behaviour_v4'}}, 'reset_challenge': True, 'protocols': {'challenger': 'http', 'challenger_ssl_verify': False, 'miner': 'http', 'miner_ssl_verify': False}, 'resource_limits': {'num_cpus': 4, 'mem_limit': '12g'}, 'environment': {'ENV': 'PRODUCTION'}, 'baseline_reference_comparison_docker_hub_ids': ['redteamsubnet61/base_hbv2_image1@sha256:4247a5bcc3528b2c13e3b8ffe04e2bf557d98ec3d8dd2c814735c538a81438e2', 'redteamsubnet61/base_hbv2_image2@sha256:4ded4313b448cb970cadf62664c7bba28d9d777c9f63c95a51d6fea9b307c0f9', 'redteamsubnet61/base_hbv2_image3@sha256:65110ad3f64a9ee782868348da873399f00730b65fd8feb14b730eaae62d53a4', 'redteamsubnet61/base_hbv2_image4@sha256:6d2360ed9ff7310dbc31aee5ac61a9ebf60edbd4e85fd3077bfbdd42f7abd3f0', 'redteamsubnet61/base_hbv3_image1@sha256:14305b2d81d562a9549db0719ab4d8c19cc00dafc31fe826d28c5ab935fb3130', 'redteamsubnet61/base_hbv3_image2@sha256:fee9a54863c480c0088419e3b376b16ec99cf2fbdcf71211834b6e0bb155aefc']}}

wallet:
  name: btwall_1
  hotkey: bthotkey_1
  path: /workspace/wallets/
subtensor:
  network: finney
  chain_endpoint: wss://entrypoint-finney.opentensor.ai:443
  _mock: false
axon:
  port: 8088
  ip: '[::]'
  external_port: null
  external_ip: null
  max_workers: 10
logging:
  debug: false
  trace: false
  info: false
  record_log: false
  logging_dir: ~/.bittensor/miners
netuid: 61
neuron:
  fullpath: ''
validator:
  cache_dir: ./.cache/
  hf_repo_id: redteamsubnet61/storage
  use_centralized_scoring: false
config: false
strict: false
no_version_checking: false

full path: /root/.bittensor/miners/btwall_1/bthotkey_1/netuid-61
2025-06-18 05:20:22.041 |       INFO       | Info enabled.
2025-06-18 05:20:22.042 |       INFO       | Running miner for subnet: 61 on network: finney with config:
2025-06-18 05:20:22.045 |       INFO       | wallet:
  name: btwall_1
  hotkey: bthotkey_1
  path: /workspace/wallets/
subtensor:
  network: finney
  chain_endpoint: wss://entrypoint-finney.opentensor.ai:443
  _mock: false
axon:
  port: 8088
  ip: '[::]'
  external_port: null
  external_ip: null
  max_workers: 10
logging:
  debug: false
  trace: false
  info: false
  record_log: false
  logging_dir: ~/.bittensor/miners
netuid: 61
neuron:
  fullpath: /root/.bittensor/miners/btwall_1/bthotkey_1/netuid-61
validator:
  cache_dir: ./.cache/
  hf_repo_id: redteamsubnet61/storage
  use_centralized_scoring: false
config: false
strict: false
no_version_checking: false
2025-06-18 05:20:22.045 |       INFO       | Setting up Bittensor objects.
2025-06-18 05:20:22.045 |       INFO       | Wallet: Wallet (Name: 'btwall_1', Hotkey: 'bthotkey_1', Path: '/workspace/wallets/')
2025-06-18 05:20:24.869 |       INFO       | Subtensor: Network: finney, Chain: wss://entrypoint-finney.opentensor.ai:443
2025-06-18 05:20:25.115 |       INFO       | Dendrite: dendrite(5Hme13v5gL5CYA5fZuYTdwYpTVwdPenVZ3sDoQ8gX2qoWrmx)
2025-06-18 05:20:26.572 |       INFO       | Metagraph: metagraph(netuid:61, n:256, block:5805815, network:finney)
2025-06-18 05:20:26.795 |       INFO       | Axon: Axon([::], 8088, 5Hme13v5gL5CYA5fZuYTdwYpTVwdPenVZ3sDoQ8gX2qoWrmx, stopped, ['Synapse'])
2025-06-18 05:20:26.811 |       INFO       | Running miner on uid: 63
2025-06-18 05:20:26.815 |       INFO       | Miner is running.
2025-06-18 05:20:27.927 |       INFO       | Serving miner axon Axon([::], 8088, 5Hme13v5gL5CYA5fZuYTdwYpTVwdPenVZ3sDoQ8gX2qoWrmx, stopped, ['Synapse', 'Commit']) on network: wss://entrypoint-finney.opentensor.ai:443 with netuid: 61
2025-06-18 05:20:36.816 |       INFO       | Miner is running.
2025-06-18 05:20:46.816 |       INFO       | Miner is running.
2025-06-18 05:20:56.816 |       INFO       | Miner is running.

```

----------------------




## compute_spec:

### miner:

#### cpu:
- min_cores: 4            # Minimum number of CPU cores
- min_speed: 2.5          # Minimum speed per core (GHz)
- recommended_cores: 8    # Recommended number of CPU cores
- recommended_speed: 3.5  # Recommended speed per core (GHz)
- architecture: "x86_64"  # Architecture type (e.g., x86_64, arm64)

#### gpu:
- required: True                       # Does the application require a GPU?
- min_vram: 8                          # Minimum GPU VRAM (GB)
- recommended_vram: 24                 # Recommended GPU VRAM (GB)
- cuda_cores: 1024                     # Minimum number of CUDA cores (if applicable)
- min_compute_capability: 6.0          # Minimum CUDA compute capability
- recommended_compute_capability: 7.0  # Recommended CUDA compute capability
- recommended_gpu: "NVIDIA A100"       # provide a recommended GPU to purchase/rent

#### memory:
- min_ram: 16          # Minimum RAM (GB)
- min_swap: 4          # Minimum swap space (GB)
- recommended_swap: 8  # Recommended swap space (GB)
- ram_type: "DDR4"     # RAM type (e.g., DDR4, DDR3, etc.)

#### storage:
- min_space: 10           # Minimum free storage space (GB)
- recommended_space: 100  # Recommended free storage space (GB)
- type: "SSD"             # Preferred storage type (e.g., SSD, HDD)
- min_iops: 1000          # Minimum I/O operations per second (if applicable)
- recommended_iops: 5000  # Recommended I/O operations per second

#### os:
- name: "Ubuntu"  # Name of the preferred operating system(s)
- version: 20.04  # Version of the preferred operating system(s)

### validator:

#### cpu:
- min_cores: 4            # Minimum number of CPU cores
- min_speed: 2.5          # Minimum speed per core (GHz)
- recommended_cores: 8    # Recommended number of CPU cores
- recommended_speed: 3.5  # Recommended speed per core (GHz)
- architecture: "x86_64"  # Architecture type (e.g., x86_64, arm64)

#### gpu:
- required: True                       # Does the application require a GPU?
- min_vram: 8                          # Minimum GPU VRAM (GB)
- recommended_vram: 24                 # Recommended GPU VRAM (GB)
- cuda_cores: 1024                     # Minimum number of CUDA cores (if applicable)
- min_compute_capability: 6.0          # Minimum CUDA compute capability
- recommended_compute_capability: 7.0  # Recommended CUDA compute capability
- recommended_gpu: "NVIDIA A100"       # provide a recommended GPU to purchase/rent

#### memory:
- min_ram: 16          # Minimum RAM (GB)
- min_swap: 4          # Minimum swap space (GB)
- recommended_swap: 8  # Recommended swap space (GB)
- ram_type: "DDR4"     # RAM type (e.g., DDR4, DDR3, etc.)

#### storage:
- min_space: 10           # Minimum free storage space (GB)
- recommended_space: 100  # Recommended free storage space (GB)
- type: "SSD"             # Preferred storage type (e.g., SSD, HDD)
- min_iops: 1000          # Minimum I/O operations per second (if applicable)
- recommended_iops: 5000  # Recommended I/O operations per second

#### os:
- name: "Ubuntu"  # Name of the preferred operating system(s)
- version: 20.04  # Version of the preferred operating system(s)

## network_spec:
### bandwidth:
- download: 100  # Minimum download bandwidth (Mbps)
- upload: 20     # Minimum upload bandwidth (Mbps)
###### root/main.tf

module "eks" {
  source                  = "./modules/eks"
  aws_public_subnet       = module.vpc.aws_public_subnet
  vpc_id                  = module.vpc.vpc_id
  cluster_name            = "module-eks-${random_string.suffix.result}"
  endpoint_public_access  = true
  endpoint_private_access = false
  public_access_cidrs     = ["0.0.0.0/0"]
  node_group_name         = "ordersystem"
  scaling_desired_size    = 1
  scaling_max_size        = 1
  scaling_min_size        = 1
  instance_types          = ["t2.micro"]
  key_pair                = "TestKeyPair"
}

module "vpc" {
  source                  = "./modules/vpc"
  public_access_cidrs     = ["0.0.0.0/0"]
  node_group_name         = "ordersystem"
  scaling_desired_size    = 1
  scaling_max_size        = 1
  scaling_min_size        = 1
  instance_types          = ["t2.micro"]
  key_pair                = "TestKeyPair"
  aws_public_subnet       = module.vpc.aws_public_subnet
  endpoint_public_access  = true
  endpoint_private_access = false
  cluster_name            = "module-eks-${random_string.suffix.result}"
  vpc_id                  = module.vpc.vpc_id

}

variable "aws_region" {
  description = "AWS region"
  type        = string
}

variable "cluster_name" {
  description = "Cluster name"
  type        = string
}

variable "subnets" {
  description = "Subnets for EKS"
  type        = list(string)
}

variable "vpc_id" {
  description = "VPC ID for EKS"
  type        = string
}
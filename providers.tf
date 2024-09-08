terraform {
  backend "s3" {
    bucket = "terraform-deploy-order-system"
    key    = "order-system-eks"
    region = "us-east-1"
  }
}
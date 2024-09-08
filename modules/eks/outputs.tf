output "endpoint" {
  value = aws_eks_cluster.order-system.endpoint
}

output "kubeconfig-certificate-authority-data" {
  value = aws_eks_cluster.order-system.certificate_authority[0].data
}
output "cluster_id" {
  value = aws_eks_cluster.order-system.id
}
output "cluster_endpoint" {
  value = aws_eks_cluster.order-system.endpoint
}
output "cluster_name" {
  value = aws_eks_cluster.order-system.name
}
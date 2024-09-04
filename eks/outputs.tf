output "endpoint" {
  value = aws_eks_cluster.ordersystem.endpoint
}

output "kubeconfig-certificate-authority-data" {
  value = aws_eks_cluster.ordersystem.certificate_authority[0].data
}
output "cluster_id" {
  value = aws_eks_cluster.ordersystem.id
}
output "cluster_endpoint" {
  value = aws_eks_cluster.ordersystem.endpoint
}
output "cluster_name" {
  value = aws_eks_cluster.ordersystem.name
}
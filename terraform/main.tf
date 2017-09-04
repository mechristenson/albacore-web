data "template_file" "userdata" {
  template = "${file("cloud-config.yaml")}"
}

resource "aws_instance" "app" {
  ami           = "ami-e5af3185"
  instance_type = "t2.small"
  key_name      = "mc-dev-us-west-2"
  user_data     = "${data.template_file.userdata.rendered}"

  tags {
    Name = "albacore-web"
  }
}

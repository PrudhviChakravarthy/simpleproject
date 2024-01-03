import subprocess

output = subprocess.check_output(["echo", "Hello, Subprocess"], text=True)
print(output)

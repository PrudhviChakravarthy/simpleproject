import subprocess

output = subprocess.getoutput("echo 'Hello, Subprocess' | tr '[:lower:]' '[:upper:]'")
print(output)

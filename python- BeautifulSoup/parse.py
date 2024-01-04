from bs4 import BeautifulSoup

html = "<html><body><h1>Hello, BeautifulSoup</h1></body></html>"
soup = BeautifulSoup(html, 'html.parser')
print(soup.h1.text)

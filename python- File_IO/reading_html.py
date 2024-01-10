from bs4 import BeautifulSoup

# Read and parse an HTML file
with open("sample.html", "r") as html_file:
    soup = BeautifulSoup(html_file, "html.parser")
    print(soup.prettify())

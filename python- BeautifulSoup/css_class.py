from bs4 import BeautifulSoup

html = "<div class='info'><p>Details</p></div>"
soup = BeautifulSoup(html, 'html.parser')

info_div = soup.find('div', class_='info')
paragraph = info_div.p
print(paragraph.text)

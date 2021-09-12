from selenium import webdriver  
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("https://www.chosic.com/music-genre-finder/")

search = driver.find_element_by_id("search-word")
search.send_keys("g.o.a.t polyphia")
time.sleep(3)
element = driver.find_element_by_id("hh1")
element.click()
time.sleep(1)
genre = (driver.find_element_by_class_name("lastfm-taga")).text
print(genre)
# try:
#     element = WebDriverWait(driver,100000).until(
#         EC.presence_of_element_located(By.ID, "hh1")
#     ) 
#     element.click()
# except:
#     #driver.quit()
#     print("exited")


driver.quit()


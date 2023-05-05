This folder contains all the things used to gather, test, and predict 
the data used for this project. 
The files in this folder are NOT REQUIRED to run the google extension but
are here to show how this project was possible.
We used Selenium Test.ipynb to scrap network traffic off of websites
to create our dataset.
train.ipynb is where we actually train and model our data from our dataset.
We used natrual language processing or NLP for short since it is best for
predicting results from text. The idea to use NLP over other methods was
because it will allow us to pick up trends in our data such as 'doubleclick.net'
which is an ad server.
We also used Multinomal Naive Bays to train our data since we did not have many variables
to train our data off of.
We trained the data using ad_list_train.xlsx and predicted data from ad_list_test.xlsx
using the model from it.
Afterwards we saved our model and vectorizer as .pkl files so they can be loaded anywhere.

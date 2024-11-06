
# Sentiment Analysis-Paris Olympics 2024

![attachment:logo.png](Images/logo.png)

## Table of Contents

1. [Business Understanding](#business-understanding)
   - [Overview](#overview)
   - [Goal](#goal)
   - [Objectives](#objectives)
   - [Stakeholders](#stakeholders)

2. [Data Understanding](#data-understanding)

3. [Data Preparation](#data-preparation)

4. [Modeling](#modeling)

5. [Conclusion](#conclusion)

6. [Recommendations](#recommendations)

7. [Next Steps](#next-steps)

8. [Deployment](#deployment)
   - [Installation](#installation)

9. [Libraries and Tools Used](#libraries-and-tools-used)

10. [License](#license)

11. [Contributing Members](#contributing-members)

12. [Contacts](#contacts)

13. [Repository Structure](#repository-structure)

## Business Understanding

**Overview**
The project develops an AI-driven detection system for tracking influenza, an acute viral infection causing annual epidemics with severe respiratory symptoms, and tuberculosis, a bacterial infection that remains a major public health threat especially in developing nations. Using social media data, the system aims to identify outbreaks early, enabling faster response from WHO and health agencies to reduce disease spread and mortality. CopyRetry

**Goal**

Early detection of potential influenza and tuberculosis outbreaks using real-time social media data.

**Objectives**

1. Early detection of potential influenza and tuberculosis outbreaks using real-time social media data.
2. Track the spread patterns of these diseases by monitoring symptom-related keywords and geospatial data from social posts.
3. Identify high-risk areas for outbreaks before they are officially reported.
4. Develop predictive models to forecast the trajectory of potential outbreaks.
5. Provide early alerts to public health organizations and government agencies to enable faster response and intervention.

## Stakeholders
 1. World Health Organization (WHO)
Global health agency responsible for coordinating pandemic preparedness and response

2. National/Regional Public Health Organizations
Disease control centers, epidemiology departments in countries/regions

3. Emergency Response Agencies
Disaster management authorities, emergency medical teams

4. Government Policymakers
Health ministers, legislators responsible for public health policies

5. Healthcare Providers
Hospitals, clinics, and other medical facilities that need early warning

6. Public Health Researchers and Epidemiologists
Academics and analysts studying disease trends and mitigation strategies

7. The General Public
Citizen stakeholders who benefit from faster outbreak response and containment

## Data Understanding

The data was extracted from X using Octorparse Webscraping Tool. The focus was on tweets in the form of hashtags, comments and retweets discussing the various aspects of the Paris Olympics.
 
## Data Preparation

The data processing step involved analyzing and cleaning a merged dataset of tweets related to the 2024 Paris Olympics originally composed of multiple CSV files. A DataUnderstanding class was created to examine the dataset revealing missing values and discrepancies as well as a large number of apparent duplicates most of which were false positives due to partial similarities.
## Visualizations
 
 
[![Visualization DashBoard](https://img.shields.io/badge/Olympics-F4C300?style=plastic)]( 
https://public.tableau.com/app/profile/ivy.atieng/viz/2024PARISOLYMPICSVISUALIZATIONS/Dashboard2)
 ## Modeling
  
The model development and evaluation process involved testing several approaches. We started with traditional machine learning models, including Logistic Regression, Support Vector Machine, Random Forest, and Naive Bayes. Among these, the Random Forest model emerged as the best performer initially achieving 97.4% accuracy which slightly decreased to 96.6% after tuning. We also implemented an XGBoost model using RandomizedSearchCV for hyperparameter tuning, which achieved 82.2% accuracy. The VADER model demonstrated excellent performance with 94.92% accuracy and impressive overall metrics: 95.20% Precision, 94.92% Recall and 95.01% F1-Score. In contrast, the DistilBERT model showed lower performance with 44.34% accuracy and overall metrics of 45.94% Precision, 44.34% Recall and 44.62% F1-Score.

## Conclusion

> The VADER (Valence Aware Dictionary and sEntiment Reasoner) model significantly outperformed all other models including the tuned Random Forest. The success of VADER, a rule-based model designed specifically for social media text, highlights the importance of domain-specific tools in sentiment analysis especially when dealing with the nuanced language of Olympic-related discussions on social media platforms. 

## Recommendations

1.	Implement a real-time sentiment tracking dashboard for organizers and media partners, allowing them to respond quickly to shifts in public opinion. 
2.	Develop a multi-lingual sentiment analysis capability to cater to the international nature of the Olympics using language-specific versions of VADER where available. 
3.	Create a sentiment-based alert system for potentially controversial or viral topics enabling rapid response from the communications team. 
4.	Integrate sentiment analysis results with other data sources (e.g. ticket sales, TV ratings) to provide a comprehensive view of public engagement. 
5.	Use sentiment trends to guide content creation and social media strategies focusing on themes and athletes that generate positive engagement. 
6.	Provide regular sentiment reports to sponsors helping them optimize their Olympic-related marketing campaigns. 
7.	Collaborate with local Paris businesses to use sentiment data for improving visitor experiences during the Olympics.

## Next steps

1.	Incorporate Olympics-specific features such as mentions of specific sports, athletes or events to improve classification accuracy. 
2.	Create a specialized lexicon for VADER that includes Olympic-specific terms and their sentiment associations. 
3.	Extend the sentiment analysis to multiple social media platforms and news sources for a more comprehensive view. 
4.	Develop user-friendly and interactive dashboards for stakeholders to explore sentiment data in real-time. 
5.	Set up a system to compare sentiment trends with previous Olympic events to identify unique characteristics of the Paris Olympics. 
6.	Develop algorithms to automatically identify and report on significant shifts in sentiment or emerging trends. 
7.	Offer training sessions for various stakeholders on how to interpret and act upon the sentiment analysis results. 
8.	Set up infrastructure for continued analysis post-Olympics to track the event's lasting impact on public sentiment towards Paris and the Olympic movement.

### Deployment
Check out our app by clicking on your favorite color: [![Paris](https://img.shields.io/badge/Paris-0072CE?style=plastic&logo=Olympics&logoColor=white)](https://olympicssentimentanalysis.streamlit.app/)
[![Olympics](https://img.shields.io/badge/Olympics-F4C300?style=plastic)](https://olympicssentimentanalysis.streamlit.app/)
[![Sentiment](https://img.shields.io/badge/Sentiment-000000?style=plastic)](https://olympicssentimentanalysis.streamlit.app/)
[![Analysis](https://img.shields.io/badge/Analysis-00843D?style=plastic)](https://olympicssentimentanalysis.streamlit.app/)
[![App](https://img.shields.io/badge/App-EE334E?style=plastic)](https://olympicssentimentanalysis.streamlit.app/)

### Installation 
To run the application locally, follow the following steps:

**Clone the repository**

**https:**
```
git clone https://github.com/Atieng/Disease-Detection-System.git
```
**ssh:**
```
git clone git@github.com:Atieng/Disease-Detection-System.git
```
**Navigate to the project directory**

```
cd Disease-Detection-System.git.git
```
**Create a virtual environment**

```
python -m venv Flu_env
```
**Activate the virtual environment**

**Windows:**
```
vader_env\Scripts\activate
```
**MacOS/Linux:**
```
source vader_env/bin/activate
```
**Install dependencies**
```
pip install -r requirements.txt
```
<!-- **Execute the app on Streamlit**
```
streamlit run vader.py
``` -->

## 🔗 Libraries and Tools Used
![numpy](https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white)
![pandas](https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white)
![python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
![tensorflow](https://img.shields.io/badge/tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=blue)
![matplotlib](https://img.shields.io/badge/Matplotlib-11557c?style=for-the-badge&logo=python&logoColor=white)
![nltk](https://img.shields.io/badge/NLTK-154f3c?style=for-the-badge&logo=python&logoColor=white)
![scikitlearn](https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)


## License
MIT License

## Contributing members
- [Ivy Atieng](https://github.com/Atieng)
 
  
## Contacts
- atiengivylisa@gmail.com
 

Kindly don't hesitate to reach out to the team if you have any questions.

## Repository Structure

```
Early Detection and Tracking of Disease Outbreaks using AI and Social Media Data/
│
└── Project Files/
    ├── .ipynb_checkpoints
    ├── .streamlit
    ├── Csv Files
    ├── Images
    ├── Models
    ├── Notebooks
    ├── the_team
    ├── .DS_Store
    ├── .gitattributes
    ├── .gitignore
    ├── LICENSE
    ├── README.md
    ├── Sentiment Analysis Presentation.pdf
    ├── requirements.txt
    ├── sentiment_analysis_paris_olympics.docx
    └── vader.py
      
```



from django.shortcuts import render
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import string

# Create your views here.
def index(request):
    return render(request, 'MHApp/index.html', {})

def analyze(request):
    text = request.GET.get('text')
    lowertext = text.lower()
    cleanedtext = lowertext.translate(str.maketrans('','',string.punctuation))
    score = SentimentIntensityAnalyzer().polarity_scores(cleanedtext)
    positive = round(score['pos'], 2)
    negative = round(score['neg'], 2)
    neutral = round(score['neu'], 2)
    compound = score['compound']

    return render(request, 'MHApp/index.html', {'text': text,'positive': positive,'negative': negative,'neutral': neutral,'compound': compound})
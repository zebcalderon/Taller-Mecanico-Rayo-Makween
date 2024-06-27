from django import forms
from .models import *

class TrabajoForm(forms.ModelForm):

    trabajo_id = forms.IntegerField(widget=forms.HiddenInput(), required=False)

    class Meta:
        model = Trabajo
        fields = '__all__'

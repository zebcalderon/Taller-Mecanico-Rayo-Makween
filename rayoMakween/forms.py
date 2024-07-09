from django import forms
from .models import *
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class TrabajoForm(forms.ModelForm):

    trabajo_id = forms.IntegerField(widget=forms.HiddenInput(), required=False)

    class Meta:
        model = Trabajo
        fields = '__all__'
        
    def __init__(self, *args, **kwargs):
        super(TrabajoForm, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            if self.instance and hasattr(self.instance, field_name):
                field.widget.attrs['placeholder'] = getattr(self.instance, field_name)

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2']
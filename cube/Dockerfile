FROM python:3.9

RUN pip install --no-cache-dir Flask Flask-Cors

COPY cube.py app.py

EXPOSE 8081

CMD [ "python", "app.py" ]
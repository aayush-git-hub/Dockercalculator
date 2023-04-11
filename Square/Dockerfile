FROM python:3.9

RUN pip install --no-cache-dir Flask Flask-Cors

COPY square.py app.py

EXPOSE 8082

CMD [ "python", "app.py" ]
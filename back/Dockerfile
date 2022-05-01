FROM python:3.10.4-alpine

COPY . .

RUN pip3 install -r requirements.txt

ENTRYPOINT [ "python3", "main.py" ]
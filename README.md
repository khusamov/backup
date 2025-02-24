Создание резервных копий git-репозиторий
========================================

Скрипт должен запускаться по команде:

```
npx khusamov-backup
```

Скрипт будет создан на основе кода:  
https://github.com/khusamov/khusamov.github.io/blob/main/scripts/backup-repo.mjs

Файл .env
---------

В корне добавьте файл `.env` со следующим содержимым:

```
TOKEN = <Сюда добавьте токен Fine-grained tokens>
```

Токен следует сгенерировать на странице:
https://github.com/settings/personal-access-tokens/
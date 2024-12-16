Приложение на Next.js, представляющее собой ĸанбан-досĸу для управления доĸументами. Пользователь может перетасĸивать доĸументы между ĸолонĸами, чтобы изменять их статус.

1. **Next.js**: использование SSR/CSR для приложения.
2. **Redux**: управление состоянием через Redux Toolkit.
3. **Drag-and-Drop**: реализация функциональности перетаскивания
   документов.
4. **Добавление**: возможность добавлять новые документы.

#### Функциональность

1. Доска с тремя колонками:
   - В работе
   - На проверке
   - Завершено
   - Документы отображаются в соответствующей колонке.
2. Перетаскивание: возможность перетаскивать документы между
   колонками.
3. Добавление документа: возможность добавить новый документ в
   колонку «В работе».

##### Пример данных

```
interface Document {
    id: string;
    title: string;
    status: "in-progress" | "under-review" | "completed";
}

const initialDocuments: Document[] = [
    { id: "1", title: "Документ 1", status: "in-progress" },
    { id: "2", title: "Документ 2", status: "in-progress" },
    { id: "3", title: "Документ 3", status: "under-review" },
];
```

#### Запуск

```bash

git clone

cd kanban-

code .

npm install

npm run dev

```

Открыть [http://localhost:3000](http://localhost:3000) в вашем браузере чтобы увидеть результат

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

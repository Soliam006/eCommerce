## Run Locally

Clone the project

```bash
  git clone https://dredsoftlabs-admin@bitbucket.org/dredsoftlabs/ecommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

### My Design Approach:
> I went with Bootstrap's grid system to make the cards look sharp on any device (3 columns on desktop, 2 on tablets, 1 on mobile). Added a subtle hover effect that gently scales up product images when you mouse over them, and made sure text stays tidy with smart truncation.

### What I Kept in Mind for Responsiveness:

> - Images maintain their 1:1 ratio and stay perfectly centered 
> - Text never overflows (titles get ellipsis, descriptions cap at 3 lines)
> - Buttons automatically stack neatly on mobile
> - The "Out of Stock" badge stays clearly visible at all sizes
> - Kept everything professional but approachable - all the little details work together whether you're browsing on your phone or a big screen. The micro-interactions feel premium without being flashy.

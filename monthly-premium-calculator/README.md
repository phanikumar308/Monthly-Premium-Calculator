
# 🧮 Monthly Premium Calculator (Angular Standalone)

A small Angular application that calculates **monthly insurance premium** based on user inputs and occupation rating factors.

---

## 🚀 Features
- Angular 18+ with **standalone components**
- **Reactive Forms** with full validation
- Modular structure: services + facade + UI
- Auto premium recalculation when occupation changes
- Clean UI with simple styling
- Test data and expected results included

---

## 🧠 Formula
Monthly Premium = (Death Cover * Occupation Factor * Age) / 1000 * 12


### Occupation Rating Factors

| Occupation        | Rating         | Factor  |
|--------------------|----------------|----------|
| Doctor             | Professional   | 1.5      |
| Author             | White Collar   | 2.25     |
| Cleaner / Florist  | Light Manual   | 11.5     |
| Farmer / Mechanic  | Heavy Manual   | 31.75    |

---

## 🧾 Example Test Data

| Name | Age | Occupation | Death Cover | Expected Premium |
|------|-----|-------------|--------------|------------------|
| John Doe | 35 | Doctor | 500,000 | 315,000 |
| Alice | 40 | Author | 1,000,000 | 1,080,000 |
| Robert | 30 | Cleaner | 250,000 | 1,035,000 |
| Mary | 50 | Mechanic | 750,000 | 14,287,500 |

---

## ✅ Validation Rules
- All fields are **mandatory**
- Age and Death Cover must be **greater than 0**
- Premium auto-recalculates when **occupation changes**

---

## 🧩 Architecture Overview
- **Models:** `occupation.model.ts` — defines occupation data
- **Services:** 
  - `rating.service.ts` → provides factor values  
  - `premium.service.ts` → implements formula  
  - `premium-calculator.facade.ts` → orchestrates both  
- **Components:** 
  - `premium-calculator` → input form  
  - `premium-display` → result viewer  
  - `app.ts` → root component

---

## 🧰 Tech Stack
- Angular 18+ (Standalone)
- TypeScript
- Reactive Forms
- Signals
- HTML + CSS

---

## 🧪 Run Locally
```bash
npm install
npm start
Then open: http://localhost:4200

Test 

ng test

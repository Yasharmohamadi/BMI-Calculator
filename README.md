# این اسکریپت کوتاه برای محاسبه شاخص [BMI](https://en.wikipedia.org/wiki/Body_mass_index) هر فرد نوشته شده است.

### برای مشاهده، [اینجا](https://yasharmohamadi.github.io/BMI-Calculator/) کلیک کنید.

---
## فرمول محاسبه BMI : 


![Obesity-and-BMI](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Obesity_%26_BMI.png/440px-Obesity_%26_BMI.png)


---
## اسکریپت محاسبه : 
```javascript
let cmHeight = cmNumberInout.value;
let kgWeight = kgNumberInout.value;
let BMI = (kgWeight / (Math.pow(cmHeight/100, 2))).toFixed(1);
```
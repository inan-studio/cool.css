# Cool CSS

HTML elementlerinin daha güzel görünmesi için geliştirilmekte olan kütüphane. Projeyi forkleyerek destek olabilirsiniz.

## Kurulum

cool.css dosyasını ister indirerek isterseniz de bu yöntemle kullanabilirsiniz.
```html
<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/inan-studio/cool.css/master/cool.css">
```

## React ile Kullanımı
components klasörünü ve cool.css dosyasını create-react-app projenizin src klasörüne atın. Daha sonra herhangi bir componentte kullanabilirsiniz.<br />

Örneğin App.js'de:
```javascript
import React, {Component} from "react";
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Selectbox from './components/Selectbox';

class App extends Component {
  render(){
    return (
      <div>
          <Radio name="cinsiyet" /> Erkek<br />
          <Radio name="cinsiyet" /> Kız<hr />
          <Checkbox name="kurallar" /> Kuralları okudum ve kabul ediyorum.<hr />
          Şehir seçin: <Selectbox name="sehir">
            <option value="istanbul">İstanbul</option>
            <option value="ankara">Ankara</option>
            <option value="izmir">İzmir</option>
          </Selectbox>
      </div>
    );
  }
  
}

export default App;
```

## Kullanımı

- Checkbox oluşturmak için
```html
<label class="checkbox">
	<input type="checkbox">
	<span class="checkbox">
		<span></span>
	</span>
</label>
```
- Radio oluşturmak için
```html
<label class="radio">
	<input type="radio">
	<span class="radio"></span>
</label>
```
- Select box oluşturmak için
```html
<select class="select">
	<option>...</option>
	<option>...</option>
</select>
```

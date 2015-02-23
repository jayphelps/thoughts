Remove explicit data bindings

`User` route:

```javascript
import Route from 'ember/route';

export default Route.extend({
  model(params) {
    /*
      "user": {
        "email": "john@doyle.com",
        "username": "John Doyle"
      }
    */
    return this.store.find('user', params.userId);
  }
});
```

```html
{{user-profile}}
```

`User` decorator:

```javascript
export default interface UserMetadata {
  email: string,
  username: string
}
```

`UserProfile` component:

```javascript
import Component from 'ember/component';

export default Component.extend();
```

```html
Email: {{email}}
Username: {{username}}
```

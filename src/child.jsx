import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-onsenui';
import GrandChild from 'grandchild.jsx';
export default class Child extends React.Component {
constructor(props) {
super(props);
this.decrementCount = this.decrementCount.bind(this);
}
decrementCount() {
this.props.decrementCount(); // AppのupdateFromChildを呼び出す
}

render() {
return (
<Card>
<div className="title">Child</div>
<div className="content">
<div>Appから渡されたcount={this.props.count}</div>
<hr />
<Button modifier="large" onClick={this.decrementCount}>Down</Button>
<GrandChild count={this.props.count} clear={this.props.clear} />
</div>
</Card>
);
}
}
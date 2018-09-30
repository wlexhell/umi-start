import { Card, Button } from 'antd';
import React, { PureComponent } from 'react';
import router from 'umi/router';

export default class Shop extends PureComponent {

    goUser() {
        router.push('./user')
    }

    render() {
        return (
            <Card title="商店">
                <Button onClick={this.goUser}>去用户中心</Button>
            </Card>
        )
    }
}
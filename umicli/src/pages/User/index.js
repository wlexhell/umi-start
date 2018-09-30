import { Card, Button } from 'antd';
import React, { PureComponent } from 'react';
import router from 'umi/router';

export default class User extends PureComponent {

    goShop() {
        router.push('/shop')
    }

    render() {
        return (
            <Card title="用户中心">
                <Button onClick={this.goShop}>去商店</Button>
            </Card>
        )
    }
}
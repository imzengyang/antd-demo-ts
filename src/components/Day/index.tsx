
import * as React from 'react';
import { Layout, Row, Col, Calendar, Card, Divider, Timeline, List } from 'antd';
import './index.css'
const Content = Layout.Content;

export default class Day extends React.Component {


    renderList() {
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
        return (
            <List
                bordered={false}
                dataSource={data}
                renderItem={(item: React.ReactElement<any>, index: number) => (<List.Item>{data[index]}</List.Item>)}
            />
        );
    }
    render() {
        return (
            <Layout className="Day">
                <Content>
                    <Row>
                        <Col span={12}>
                            <Row>
                                <Col span={12}>
                                    <Card bordered={false} >
                                        <div className="day-title">11</div>
                                        <div className="week-day">周四</div>
                                        <div className="year-month">2018年-01月</div>
                                        <div className="day-info">今年的第11天，02周</div>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Calendar fullscreen={false}

                                        style={{ background: "#ffffff" }} />
                                </Col>
                            </Row>
                            <Divider />
                            <Row style={{paddingLeft:15}}>
                                <Col span={24}>
                                    <h4> 今日待办</h4>
                                    {this.renderList()}
                                </Col>
                            </Row>
                        </Col>

                        <Col span={12} style={{ padding: 20 }}>
                            <Timeline >
                                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item color="red">
                                    <p>Solve initial network problems 1</p>
                                    <p>Solve initial network problems 2</p>
                                    <p>Solve initial network problems 3 2015-09-01</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <p>Technical testing 1</p>
                                    <p>Technical testing 2</p>
                                    <p>Technical testing 3 2015-09-01</p>
                                </Timeline.Item>
                            </Timeline>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}
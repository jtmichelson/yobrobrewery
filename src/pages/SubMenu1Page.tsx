import React from 'react';

export default class SubMenu1Page extends React.Component<ISubMenu1PageProps, ISubMenu1PageState> {

  constructor(props: ISubMenu1PageProps) {
    super(props);
    this.state = {
      name: "subMenuPage1"
    }
  }
  componentWillMount() {
    // TODO
  }
  componentDidUpdate() {
    // TODO
  }
  componentWillUpdate() {
    // TODO
  }
  render() {
    return (
      <div className="SubMenu1Page">
        {this.state.name} Component
      </div>);
  }
}

interface ISubMenu1PageProps {
  // TODO
}

interface ISubMenu1PageState {
  name: string
}

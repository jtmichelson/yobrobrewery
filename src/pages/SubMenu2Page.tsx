import React from "react";

export default class SubMenu2Page extends React.Component<
  ISubMenu2PageProps,
  ISubMenu2PageState
> {
  constructor(props: ISubMenu2PageProps) {
    super(props);
    this.state = {
      name: "subMenuPage2",
    };
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
    return <div className="SubMenu2Page">{this.state.name} Component</div>;
  }
}

interface ISubMenu2PageProps {
  // TODO
}

interface ISubMenu2PageState {
  name: string;
}

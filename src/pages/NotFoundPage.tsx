import React from "react";

export default class NotFoundPage extends React.Component<
  INotFoundPageProps,
  INotFoundPageState
> {
  constructor(props: INotFoundPageProps) {
    super(props);
    this.state = {
      name: "notFoundPage",
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
    return <div className="NotFoundPage">{this.state.name} Component</div>;
  }
}

interface INotFoundPageProps {
  // TODO
}

interface INotFoundPageState {
  name: string;
}

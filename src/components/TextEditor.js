import React, { Component, Fragment } from "react";
import { Editor } from "slate-react";
import { Value } from "slate";

import Icon from "react-icons-kit";
import { bold } from "react-icons-kit/feather/bold";
import { italic } from "react-icons-kit/feather/italic";
import { code } from "react-icons-kit/feather/code";
import { list } from "react-icons-kit/feather/list";
import { underline } from "react-icons-kit/feather/underline";
import { airplay as blockquote } from "react-icons-kit/feather/airplay";

import { BoldMark, ItalicMark, FormatToolbar, BlockQuote, SearchInput } from "./index";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "My first paragraph!"
              }
            ]
          }
        ]
      }
    ]
  }
});

export default class TextEditor extends Component {
  state = {
    value: initialValue,
    active: []
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  onKeyDown = (e, change) => {
    if (!e.ctrlKey) {
      return;
    }

    e.preventDefault();

    switch (e.key) {
      case "q": {
        change.toggleMark("blockquote");
        break;
      }
      case "b": {
        change.toggleMark("bold");
        break;
      }
      case "i": {
        change.toggleMark("italic");
        break;
      }
      case "c": {
        change.toggleMark("code");
        break;
      }
      case "l": {
        change.toggleMark("list");
        break;
      }
      case "u": {
        change.toggleMark("underline");
        break;
      }
      case "f": {
        this.activateButton("search");
        break;
      }
      default: {
        break;
      }
    }
  };

  renderMark = props => {
    switch (props.mark.type) {
      case "bold": {
        return <BoldMark {...props} />;
      }
      case "italic": {
        return <ItalicMark {...props} />;
      }
      case "code": {
        return <code {...props.attributes}>{props.children}</code>;
      }
      case "list": {
        return (
          <ul {...props.attributes}>
            <li>{props.children}</li>
          </ul>
        );
      }
      case "underline": {
        return <u {...props.attributes}>{props.children}</u>;
      }
      case "blockquote": {
        return <BlockQuote {...props.attributes}>{props.children}</BlockQuote>;
      }
      case "highlight": {
        return (
          <span
              {...props.attributes}
              style={{ backgroundColor: '#ffeeba' }}
          >
              {props.children}
          </span>
      );
      }
      default: {
        return;
      }
    }
  };

  onMarkClick = (e, type) => {
    e.preventDefault();

    const { value } = this.state;

    const change = value.change().toggleMark(type);

    this.onChange(change);
  };

  activateButton(button) {
    this.setState(state => ({
      active: { [button]: !state.active[button] }
    }));
  }

  render() {
    return (
      <Fragment>
        <FormatToolbar>
          <SearchInput 
            active={this.state.active["search"] ? "true" : "false"}  
            editor={{'text': this.state.value, 'callback': this.onChange}}
          />
          <button
            onPointerDown={e => {
              this.onMarkClick(e, "bold");
              this.activateButton("bold");
            }}
            className="tooltip-icon-button"
            active={this.state.active["bold"] ? "true" : "false"}
          >
            <Icon icon={bold} />
          </button>
          <button
            onPointerDown={e => {
              this.onMarkClick(e, "italic");
              this.activateButton("italic");
            }}
            className="tooltip-icon-button"
            active={this.state.active["italic"] ? "true" : "false"}
          >
            <Icon icon={italic} />
          </button>
          <button
            onPointerDown={e => {
              this.onMarkClick(e, "code");
              this.activateButton("code");
            }}
            className="tooltip-icon-button"
            active={this.state.active["code"] ? "true" : "false"}
          >
            <Icon icon={code} />
          </button>
          <button
            onPointerDown={e => {
              this.onMarkClick(e, "list");
              this.activateButton("list");
            }}
            className="tooltip-icon-button"
            active={this.state.active["list"] ? "true" : "false"}
          >
            <Icon icon={list} />
          </button>
          <button
            onPointerDown={e => {
              this.onMarkClick(e, "underline");
              this.activateButton("underline");
            }}
            className="tooltip-icon-button"
            active={this.state.active["underline"] ? "true" : "false"}
          >
            <Icon icon={underline} />
          </button>
          <button
            onPointerDown={e => {
              this.onMarkClick(e, "blockquote");
              this.activateButton("blockquote");
            }}
            className="tooltip-icon-button"
            active={this.state.active["blockquote"] ? "true" : "false"}
          >
            <Icon icon={blockquote} />
          </button>
        </FormatToolbar>
        <Editor
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderMark={this.renderMark}
        />
      </Fragment>
    );
  }
}

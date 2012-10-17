# jquery-resizable

A simple, jQuery plugin for resize the first parent of the object.

## Installation

Include script after the jQuery library (unless you are packaging scripts somehow else):

    <script src="/path/to/jquery.resizable.js"></script>

## Usage

Basic form

    $(selector).resize(); //Remember -> Resize the first parent of the object.

Complete form

    $(selector).resize({
      cursor : "nw-resize", //type of cursor;
      onResizeStart : function () { console.log("Start"); }, //function before start resize
      onResizing : function () { console.log("Continue"); }, //function while resizing 
      onResizeEnd : function () { console.log("Finished"); } //function after finished drag
    });

## Authors
[Thyago Quintas](https://github.com/thyagoquintas)
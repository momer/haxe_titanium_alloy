{
  "tagname": "class",
  "name": "Alloy.Controller.UI",
  "doc": "<p>Provides convenience methods for working with Titanium UI objects.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "nop",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.Controller.UI",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "tagname": "method",
        "name": "create",
        "owner": "Alloy.Controller.UI",
        "doc": "<p>Creates a Titanium UI object with the specified styles.</p>\n\n<h4>Example</h4>\n\n<p>The following creates a new View object and assigns the \"dialog\"\nTSS class (defined elsewhere) to the view, and finally adds it to main window.</p>\n\n<pre><code>var view = $.UI.create(\"View\", {\n    classes: 'dialog'\n});\n$.index.add(view);\n</code></pre>\n",
        "params": [
          {
            "type": "String",
            "name": "apiName",
            "doc": "<p>Name of the Titanium object to create. This can either be the full class\nname, such as <code>Ti.UI.Button</code>, or the XML element, such as <code>Button</code>.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          },
          {
            "type": "AlloyStyleDict",
            "name": "opts",
            "doc": "<p>Dictionary of styles to apply. <code>opts</code> may also contain any additional properties you would like to apply directly the created Titanium object.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "AlloyStyleDict"
          }
        ],
        "return": {
          "type": "Titanium.UI.View/Alloy.Controller",
          "name": "return",
          "doc": "<p>@since 1.2.0</p>\n",
          "properties": null,
          "html_type": "Titanium.UI.View/Alloy.Controller"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-create",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/docs/apidoc/controller.js",
            "linenr": 7
          }
        ],
        "shortDoc": "Creates a Titanium UI object with the specified styles. ...",
        "html_meta": {
          "static": null
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/docs/apidoc/controller.js",
      "linenr": 1
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy.Controller",
  "doc": "<p>The base class for Alloy controllers.</p>\n\n<p>Each controller is associated with a UI hierarchy, defined in an XML file in the\n<code>views</code> folder. Each element in the view hierarchy is either a Titanium View\nor another Alloy controller or widget. Each Alloy controller or widget can additionally contain\nTitanium Views and/or more controllers and widgets.</p>\n",
  "extends": "Backbone.Events",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "assignment",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.Controller",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "tagname": "method",
        "name": "addClass",
        "owner": "Alloy.Controller",
        "doc": "<p>Adds a TSS class to the specified view object.</p>\n\n<p>You can apply additional styles with the <code>opts</code> parameter. To use this method\neffectively you may need to enable autostyling\non the target XML view. See <a href=\"#!/guide/Dynamic_Styles-section-37530415_DynamicStyles-Autostyle\">Autostyle</a>\nin the Alloy developer guide.</p>\n\n<h4>Example</h4>\n\n<p>The following adds the TSS classes \".redbg\" and \".bigger\" to a Titanium.UI.Label\nobject proxy <code>label1</code>, and also sets the label's <code>text</code> property to \"Cancel\".</p>\n\n<pre><code>// index.js\n$.addClass($.label1, 'redbg bigger', {text: \"Cancel\"});\n</code></pre>\n\n<p>The 'redbg' and 'bigger' classes are shown below:</p>\n\n<pre><code>// index.tss\n\".redbg\" : {\n    color: 'red'\n}\n\".bigger\": {\n    font : {\n       fontSize: '36'    \n    }\n}\n</code></pre>\n",
        "params": [
          {
            "type": "Object",
            "name": "proxy",
            "doc": "<p>View object to which to add class(es).</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Array<String>/String",
            "name": "classes",
            "doc": "<p>Array or space-separated list of classes to apply.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Array<String>/String"
          },
          {
            "type": "Dictionary",
            "name": "opts",
            "doc": "<p>Dictionary of properties to apply after classes have been added.\n@since 1.2.0</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Dictionary"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-addClass",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy/controllers/BaseController.js",
            "linenr": 273
          }
        ],
        "shortDoc": "Adds a TSS class to the specified view object. ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "createStyle",
        "owner": "Alloy.Controller",
        "doc": "<p>Creates a dictionary of properties based on the specified styles.</p>\n\n<p>You can use this dictionary with the view object's\napplyProperties method\nor a create object method, such as Titanium.UI.createView.</p>\n\n<h4>Examples</h4>\n\n<p>The following creates a new style object that is passed as a parameter\nto the Ti.UI.createLabel() method.</p>\n\n<pre><code>var styleArgs = {\napiName: 'Ti.UI.Label',\n    classes: ['blue','shadow','large'],\n    id: 'tester',\n    borderWidth: 2,\n    borderRadius: 16,\n    borderColor: '#000'\n};\nvar styleObject = $.createStyle(styleArgs);\ntestLabel = Ti.UI.createLabel(styleObject);  \n</code></pre>\n\n<p>The next example uses the applyProperties() method\nto apply a style object to an existing Button control (button not shown).</p>\n\n<pre><code>var style = $.createStyle({\n    classes: args.button,\n    apiName: 'Button',\n    color: 'blue'\n});\n$.button.applyProperties(style);\n</code></pre>\n",
        "params": [
          {
            "type": "AlloyStyleDict",
            "name": "opts",
            "doc": "<p>Dictionary of styles to apply.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "AlloyStyleDict"
          }
        ],
        "return": {
          "type": "Dictionary",
          "name": "return",
          "doc": "<p>@since 1.2.0</p>\n",
          "properties": null,
          "html_type": "Dictionary"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-createStyle",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy/controllers/BaseController.js",
            "linenr": 221
          }
        ],
        "shortDoc": "Creates a dictionary of properties based on the specified styles. ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "destroy",
        "owner": "Alloy.Controller",
        "doc": "<p>Frees binding resources associated with this controller and its\nUI components. It is critical that this is called when employing\nmodel/collection binding in order to avoid potential memory leaks.\n$.destroy() should be called whenever a controller's UI is to\nbe \"closed\" or removed from the app. See the <a href=\"#!/guide/Destroying_Data_Bindings\">Destroying Data Bindings</a>\ntest application for an example of this approach.</p>\n\n<h4>Example</h4>\n\n<p>In the following example the view-controller for a Window object named <code>dialog</code>\ncalls its <code>destroy()</code> method in response to the Window object being closed.</p>\n\n<pre><code>$.dialog.addEventListener('close', function() {\n    $.destroy();\n});\n</code></pre>\n",
        "params": [

        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-destroy",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy/controllers/BaseController.js",
            "linenr": 163
          }
        ],
        "shortDoc": "Frees binding resources associated with this controller and its\nUI components. ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "getTopLevelViews",
        "owner": "Alloy.Controller",
        "doc": "<p>Returns a list of the root view elements associated with this controller.</p>\n\n<h4>Example</h4>\n\n<p>The following example displays the <code>id</code> of each top-level view associated with the\ncontroller:</p>\n\n<pre><code>// index.js\nvar views = $.getTopLevelViews();\nfor (each in views) {\n    var view = views[each];\n    console.log(view.id);\n}\n</code></pre>\n",
        "params": [

        ],
        "return": {
          "type": "Array.<(Titanium.UI.View|Alloy.Controller)>",
          "name": "return",
          "doc": "\n",
          "properties": null,
          "html_type": "Array.<(Titanium.UI.View|Alloy.Controller)>"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-getTopLevelViews",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy/controllers/BaseController.js",
            "linenr": 60
          }
        ],
        "shortDoc": "Returns a list of the root view elements associated with this controller. ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "getView",
        "owner": "Alloy.Controller",
        "doc": "<p>Returns the specified view associated with this controller.</p>\n\n<p>If no <code>id</code> is specified, returns the first top-level view.</p>\n\n<h4>Example</h4>\n\n<p>The following example gets a reference to a <code>&lt;Window/&gt;</code> object\nwith the <code>id</code> of \"loginWin\" and then calls its <a href=\"Titanium.UI.Window\">open()</a> method.</p>\n\n<pre><code>var loginWindow = $.getView('loginWin');\nloginWindow.open();\n</code></pre>\n",
        "params": [
          {
            "type": "String",
            "name": "id",
            "doc": "<p>ID of the view to return.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "Titanium.UI.View/Alloy.Controller",
          "name": "return",
          "doc": "\n",
          "properties": null,
          "html_type": "Titanium.UI.View/Alloy.Controller"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-getView",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy/controllers/BaseController.js",
            "linenr": 84
          }
        ],
        "shortDoc": "Returns the specified view associated with this controller. ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "getViews",
        "owner": "Alloy.Controller",
        "doc": "<p>Returns a list of all IDed view elements associated with this controller.</p>\n\n<h4>Example</h4>\n\n<p>Given the following XML view:</p>\n\n<pre><code>&lt;Alloy&gt;\n    &lt;TabGroup id=\"tabs\"&gt;\n        &lt;Tab title=\"Tab 1\" icon=\"KS_nav_ui.png\" id=\"tab1\"&gt;\n            &lt;Window title=\"Tab 1\" id=\"win1\"&gt;\n                &lt;Label id=\"label1\"&gt;I am Window 1&lt;/Label&gt;\n            &lt;/Window&gt;\n        &lt;/Tab&gt;\n        &lt;Tab title=\"Tab 2\" icon=\"KS_nav_views.png\" id=\"tab2\"&gt;\n            &lt;Window title=\"Tab 2\" id=\"wind2\"&gt;\n                &lt;Label id=\"label2\"&gt;I am Window 2&lt;/Label&gt;\n            &lt;/Window&gt;\n        &lt;/Tab&gt;\n    &lt;/TabGroup&gt;\n    &lt;View id=\"otherview\"&gt;&lt;/View&gt;\n&lt;/Alloy&gt;         \n</code></pre>\n\n<p>The following view-controller outputs the id of each view in the hierarchy.</p>\n\n<pre><code>var views = $.getViews();\nfor (each in views) {\n    var view = views[each];\n    console.log(view.id);\n}   \n\n[INFO] :   win1\n[INFO] :   label1\n[INFO] :   tab1\n[INFO] :   wind2\n[INFO] :   label2\n[INFO] :   tab2\n[INFO] :   tabs\n[INFO] :   otherview\n</code></pre>\n",
        "params": [

        ],
        "return": {
          "type": "Array.<(Titanium.UI.View|Alloy.Controller)>",
          "name": "return",
          "doc": "\n",
          "properties": null,
          "html_type": "Array.<(Titanium.UI.View|Alloy.Controller)>"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-getViews",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy/controllers/BaseController.js",
            "linenr": 116
          }
        ],
        "shortDoc": "Returns a list of all IDed view elements associated with this controller. ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "removeClass",
        "owner": "Alloy.Controller",
        "doc": "<p>Removes a TSS class from the specified view object.</p>\n\n<p>You can apply additional styles after the removal with the <code>opts</code> parameter.\nTo use this method effectively you may need to enable autostyling\non the target XML view. See <a href=\"#!/guide/Dynamic_Styles-section-37530415_DynamicStyles-Autostyle\">Autostyle</a>\nin the Alloy developer guide.</p>\n\n<h4>Example</h4>\n\n<p>The following removes the \"redbg\" and \"bigger\" TSS classes from a Titanium.UI.Label\nobject proxy <code>label1</code>, and also sets the label's <code>text</code> property to \"...\".</p>\n\n<pre><code>$.removeClass($.label1, 'redbg bigger', {text: \"...\"});\n</code></pre>\n",
        "params": [
          {
            "type": "Object",
            "name": "proxy",
            "doc": "<p>View object from which to remove class(es).</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Array<String>/String",
            "name": "classes",
            "doc": "<p>Array or space-separated list of classes to remove.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Array<String>/String"
          },
          {
            "type": "Dictionary",
            "name": "opts",
            "doc": "<p>Dictionary of properties to apply after the class removal.\n@since 1.2.0</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Dictionary"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-removeClass",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy/controllers/BaseController.js",
            "linenr": 310
          }
        ],
        "shortDoc": "Removes a TSS class from the specified view object. ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "resetClass",
        "owner": "Alloy.Controller",
        "doc": "<p>Sets the array of TSS classes for the target View object, adding the classes specified and\nremoving any applied classes that are not specified.</p>\n\n<p>You can apply classes or styles after the reset using the <code>classes</code> or <code>opts</code> parameters.\nTo use this method effectively you may need to enable autostyling\non the target XML view. See <a href=\"#!/guide/Dynamic_Styles-section-37530415_DynamicStyles-Autostyle\">Autostyle</a>\nin the Alloy developer guide.</p>\n\n<h4>Example</h4>\n\n<p>The following removes all previously applied styles on <code>label1</code> and then applies\nthe TSS class 'no-style'.</p>\n\n<pre><code>$.resetClass($.label1, 'no-style');\n</code></pre>\n",
        "params": [
          {
            "type": "Object",
            "name": "proxy",
            "doc": "<p>View object to reset.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Array<String>/String",
            "name": "classes",
            "doc": "<p>Array or space-separated list of classes to apply after the reset.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Array<String>/String"
          },
          {
            "type": "Dictionary",
            "name": "opts",
            "doc": "<p>Dictionary of properties to apply after the reset.\n@since 1.2.0</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Dictionary"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-resetClass",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy/controllers/BaseController.js",
            "linenr": 334
          }
        ],
        "shortDoc": "Sets the array of TSS classes for the target View object, adding the classes specified and\nremoving any applied class...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "updateViews",
        "owner": "Alloy.Controller",
        "doc": "<p>Applies a set of properties to view elements associated with this controller.\nThis method is useful for setting properties on repeated elements such as\nTableViewRow objects, rather than needing to have a controller\nfor those child controllers.</p>\n\n<h4>Example</h4>\n\n<p>The following example uses this method to update a Label inside a TableViewRow object\nbefore adding it to a TableView.</p>\n\n<p>View-controller file: controllers/index.js</p>\n\n<pre><code>for (var i=0; i &lt; 10; i++) {\n  var row = <a href=\"#!/api/Alloy-static-method-createController\" rel=\"Alloy-static-method-createController\" class=\"docClass\">Alloy.createController</a>(\"tablerow\");\n  row.updateViews({\n    \"#theLabel\": {\n        text: \"I am row #\" + i\n    }\n  });  \n  $.tableView.appendRow(row.getView());\n};\n</code></pre>\n\n<p>XML view: views/tablerow.xml</p>\n\n<pre><code>&lt;Alloy&gt;\n    &lt;TableViewRow&gt;\n        &lt;Label id=\"theLabel\"&gt;&lt;/Label&gt;\n    &lt;/TableViewRow&gt;\n&lt;/Alloy&gt;     \n</code></pre>\n\n<p>XML view: views/index.xml</p>\n\n<pre><code>&lt;TableView id=\"tableView\"&gt;\n&lt;/TableView&gt;\n</code></pre>\n",
        "params": [
          {
            "type": "Object",
            "name": "args",
            "doc": "<p>An object whose keys are the IDs (in form '#id') of views to which the styles will be applied.\n@since 1.4.0</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-updateViews",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy/controllers/BaseController.js",
            "linenr": 359
          }
        ],
        "shortDoc": "Applies a set of properties to view elements associated with this controller. ...",
        "html_meta": {
          "static": null
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy/controllers/BaseController.js",
      "linenr": 5
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [
    "Backbone.Events"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy.Models",
  "doc": "<p>Class to access or create models.</p>\n\n<p>Models can either be created in markup or programmatically in the controller.</p>\n\n<p>To create models in markup, see the 'Model Element' section in the\n<a href=\"#!/guide/Alloy_XML_Markup\">Alloy XML Markup guide</a>.</p>\n\n<p>In the controller code:</p>\n\n<ul>\n<li> To create a local instance, use the Alloy.createModel method.</li>\n<li> To create a global singleton instance, use the <a href=\"#!/api/Alloy.Models-static-method-instance\" rel=\"Alloy.Models-static-method-instance\" class=\"docClass\">Alloy.Models.instance</a> method.</li>\n</ul>\n\n\n<p>Previously created models through markup or using the <code>instance</code> method\nare directly accessed as properties of the <code><a href=\"#!/api/Alloy.Models\" rel=\"Alloy.Models\" class=\"docClass\">Alloy.Models</a></code> namespace,\nusing either the name of the model JavaScript file for singletons\nor the ID name for local instances.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "nop",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.Models",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "tagname": "method",
        "name": "instance",
        "owner": "Alloy.Models",
        "doc": "<p>Creates a singleton instance of a Model based on the given model, or\nreturns an existing instance if one has already been created.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "name",
            "doc": "<p>the name of the base model for the model</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "Backbone.Model",
          "name": "return",
          "doc": "<p>An Alloy Model object singleton</p>\n",
          "properties": null,
          "html_type": "Backbone.Model"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-instance",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/docs/apidoc/model.js",
            "linenr": 21
          }
        ],
        "shortDoc": "Creates a singleton instance of a Model based on the given model, or\nreturns an existing instance if one has already ...",
        "html_meta": {
          "static": null
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/docs/apidoc/model.js",
      "linenr": 1
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy.Widget",
  "doc": "<p>Widgets are self-contained components that can be easily dropped into an Alloy project.\nThey were conceived as a way to reuse code in multiple projects or to be used multiple\ntimes in the same project.</p>\n\n<p>Note that to use the methods list below, the correct namespace is <code>Widget.create*</code> not\n<code>Alloy.Widget.create*</code>.</p>\n\n<p>For more information on widgets, see <a href=\"http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Widgets\">Alloy Widgets</a>.</p>\n\n<h4>Creating a Widget</h4>\n\n<p>Widgets are essentially miniature Alloy projects that contain their own models, views, controllers\nand assets.  They are laid out the same way as an Alloy project.</p>\n\n<p>Use <code>Widget.createController()</code>, <code>Widget.createWidget()</code>,  <code>Widget.createModel()</code> and\n<code>Widget.createCollection()</code> rather than the <code>Alloy.create*</code> methods to create\ncomponents relative to the widget context rather than the Alloy project.</p>\n\n<h4>Using a Widget</h4>\n\n<p>To import a widget in to a project:</p>\n\n<ol>\n<li>Copy the widget to the <code>app/widgets</code> folder.  The widget must be contained within its own folder.</li>\n<li>Update the <code>dependencies</code> object in the <code>config.json</code> file by adding a key/value pair with the name of\nthe widget as the key and the version number as the value.</li>\n<li><p>Add the widget to a view or create an instance of the widget in a controller:</p>\n\n<ul>\n<li>To add a widget to a view, add the <Widget> tag in the XML markup and\nset the <code>src</code> attribute to the folder name of the widget.</li>\n<li>To create an instance of a widget in a controller, use the Alloy.createController method.</li>\n</ul>\n</li>\n</ol>\n\n\n<p>You can optionally add the <code>id</code> and <code>name</code> attributes to the <code>Widget</code> element:</p>\n\n<ul>\n<li>The <code>id</code> attribute allows you to reference the widget in the controller code.  You can use this\nreference to call methods exported by the widget.</li>\n<li>The <code>name</code> attribute allows you to import a specific view-controller in the widget rather than the\ndefault one (<code>widget.xml</code>/<code>widget.js</code>).  Specify the name of the view-controller minus the extension.</li>\n</ul>\n\n\n<p>For example, to import a widget called <code>mywidget</code> in to a project, copy <code>mywidget</code> to the\n<code>app/widgets</code> folder, where its assets, controllers, views, etc. are contained in the\n<code>app/widgets/mywidget</code> folder.</p>\n\n<pre><code>app\n├── config.json\n├── controllers\n│   └── index.js\n├── views\n│   └── index.xml\n└── widgets\n    └── mywidget\n        ├── controllers\n        │   ├── foo.js\n        │   └── widget.js\n        ├── views\n        │   ├── foo.xml\n        │   └── widget.xml\n        └── widget.json\n</code></pre>\n\n<p>Next, add it as a dependency in your <code>config.json</code> file:</p>\n\n<pre><code>...\n\"dependencies\":{\n    \"mywidget\":\"1.0\"\n}\n</code></pre>\n\n<p>Finally, either add the widget in the XML markup of the view or create an instance of the widget in the controller.</p>\n\n<p>To add the widget in the view, use the <code>Widget</code> tag, specifying the <code>src</code> attribute as the name of\nthe widget:</p>\n\n<pre><code>&lt;Alloy&gt;\n    &lt;Window id=\"win\"&gt;\n        &lt;Widget id=\"myWidget\" src=\"mywidget\" /&gt;\n    &lt;/Window&gt;\n&lt;/Alloy&gt;\n</code></pre>\n\n<p>Since the <code>id</code> attribute is defined, the widget can be referenced in the controller using\n<code>$.myWidget</code>.</p>\n\n<p>To add the widget in the controller, use the <code>Alloy.createWidget</code> method. The first required parameter is\nthe name of the widget. The second optional parameter can specify the view component to\ninstantiate and the last optional parameter can specify the arguments to instantiate the widget.\nFor example, the following controller code is equivalent to the previous view markup example.</p>\n\n<pre><code>var myWidget = Alloy.createWidget(\"mywidget\");\nwin.add(myWidget.getView());\n</code></pre>\n\n<p>A widget can also be added to other widgets.  Follow the same procedure as above except the widget\nconfiguration file is called <code>widget.json</code> instead of <code>config.json</code>.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "nop",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.Widget",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "tagname": "method",
        "name": "createCollection",
        "owner": "Alloy.Widget",
        "doc": "<p>@since 1.1.0</p>\n\n<p>@since 1.1.0</p>\n",
        "params": [

        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": {
          "tagname": "inheritdoc",
          "doc": "@since 1.1.0",
          "cls": "Alloy",
          "member": "createCollection"
        },
        "meta": {
          "static": true
        },
        "id": "static-method-createCollection",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/docs/apidoc/widgets.js",
            "linenr": 100
          }
        ],
        "shortDoc": "@since 1.1.0\n\n@since 1.1.0 ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "createController",
        "owner": "Alloy.Widget",
        "doc": "<p>@since 1.1.0</p>\n\n<p>@since 1.1.0</p>\n",
        "params": [

        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": {
          "tagname": "inheritdoc",
          "doc": "@since 1.1.0",
          "cls": "Alloy",
          "member": "createController"
        },
        "meta": {
          "static": true
        },
        "id": "static-method-createController",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/docs/apidoc/widgets.js",
            "linenr": 107
          }
        ],
        "shortDoc": "@since 1.1.0\n\n@since 1.1.0 ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "createModel",
        "owner": "Alloy.Widget",
        "doc": "<p>@since 1.1.0</p>\n\n<p>@since 1.1.0</p>\n",
        "params": [

        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": {
          "tagname": "inheritdoc",
          "doc": "@since 1.1.0",
          "cls": "Alloy",
          "member": "createModel"
        },
        "meta": {
          "static": true
        },
        "id": "static-method-createModel",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/docs/apidoc/widgets.js",
            "linenr": 118
          }
        ],
        "shortDoc": "@since 1.1.0\n\n@since 1.1.0 ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "createWidget",
        "owner": "Alloy.Widget",
        "doc": "<p>@since 1.1.0</p>\n\n<p>@since 1.1.0</p>\n",
        "params": [

        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": {
          "tagname": "inheritdoc",
          "doc": "@since 1.1.0",
          "cls": "Alloy",
          "member": "createWidget"
        },
        "meta": {
          "static": true
        },
        "id": "static-method-createWidget",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/docs/apidoc/widgets.js",
            "linenr": 124
          }
        ],
        "shortDoc": "@since 1.1.0\n\n@since 1.1.0 ...",
        "html_meta": {
          "static": null
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/docs/apidoc/widgets.js",
      "linenr": 1
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy.builtins.animation",
  "doc": "<p>A collection of useful animation utilities. To use the animation builtin library,\nall you need to do is require it with the <code>alloy</code> root directory in your\n<code>require</code> call. For example:</p>\n\n<pre><code>var animation = require('alloy/animation');\nanimation.crossFade(view1, view2, 500, finishCallback);\n</code></pre>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "nop",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.builtins.animation",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "tagname": "property",
        "name": "HORIZONTAL",
        "owner": "Alloy.builtins.animation",
        "type": "String",
        "doc": "<p>To be used as direction for the flip-method</p>\n",
        "default": "\"horizontal\"",
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "property-HORIZONTAL",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 11
          }
        ],
        "shortDoc": "To be used as direction for the flip-method ...",
        "html_type": "String",
        "html_meta": {
        }
      },
      {
        "tagname": "property",
        "name": "VERTICAL",
        "owner": "Alloy.builtins.animation",
        "type": "String",
        "doc": "<p>To be used as direction for the flip-method</p>\n",
        "default": "\"vertical\"",
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "property-VERTICAL",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 17
          }
        ],
        "shortDoc": "To be used as direction for the flip-method ...",
        "html_type": "String",
        "html_meta": {
        }
      }
    ],
    "method": [
      {
        "tagname": "method",
        "name": "chainAnimate",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>Executes a series of animations on the target view.</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "view",
            "doc": "<p>View to animate.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Titanium.UI.Animation[]",
            "name": "animations",
            "doc": "<p>A set of animations to execute on <code>view</code> in sequence.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.Animation[]"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback to invoke once the chain animation is complete.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-chainAnimate",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 296
          }
        ],
        "shortDoc": "Executes a series of animations on the target view. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "crossFade",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>Transitions from one view to another using a cross-fade animation.</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "from",
            "doc": "<p>View to fade out.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Titanium.UI.View",
            "name": "to",
            "doc": "<p>View to fade in.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Number",
            "name": "duration",
            "doc": "<p>Fade duration in milliseconds.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback function, invoked after the fade completes.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-crossFade",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 94
          }
        ],
        "shortDoc": "Transitions from one view to another using a cross-fade animation. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "fadeAndRemove",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>Fades out a view then removes it from its parent view.</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "from",
            "doc": "<p>View to remove.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Number",
            "name": "duration",
            "doc": "<p>Fade duration in milliseconds.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          },
          {
            "type": "Titanium.UI.View",
            "name": "container",
            "doc": "<p>Parent container view.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback function, invoked after the fadeAndRemove completes.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-fadeAndRemove",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 117
          }
        ],
        "shortDoc": "Fades out a view then removes it from its parent view. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "fadeIn",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>Fades in the specified view.</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "to",
            "doc": "<p>View to fade in.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Number",
            "name": "duration",
            "doc": "<p>Fade duration in milliseconds.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback function, invoked after the fadeIn completes.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-fadeIn",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 139
          }
        ],
        "shortDoc": "Fades in the specified view. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "fadeOut",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>Fades out the specified view.</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "to",
            "doc": "<p>View to fade out.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Number",
            "name": "duration",
            "doc": "<p>Fade duration in milliseconds.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback function, invoked after the fadeOut completes.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-fadeOut",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 165
          }
        ],
        "shortDoc": "Fades out the specified view. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "flash",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>Flashes the target view twice, fading to partially transparent then back to\nfully-opaque.</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "view",
            "doc": "<p>View to animate.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Number",
            "name": "delay",
            "doc": "<p>If specified, animation starts after <code>delay</code> milliseconds.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback function, invoked after the flash completes.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-flash",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 259
          }
        ],
        "shortDoc": "Flashes the target view twice, fading to partially transparent then back to\nfully-opaque. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "flip",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>Transitions from one view to another using a 3D flip animation.\nThe two views need to be positioned on top of each other.\n@platform iphone 1.2.2\n@platform ipad 1.2.2</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "from",
            "doc": "<p>View to fade out.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Titanium.UI.View",
            "name": "to",
            "doc": "<p>View to fade in.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "String",
            "name": "direction",
            "doc": "<p>direction ('horizontal' or 'vertical') to flip.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          },
          {
            "type": "Number",
            "name": "duration",
            "doc": "<p>Fade duration in milliseconds.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback function, invoked after the fade completes.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-flip",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 23
          }
        ],
        "shortDoc": "Transitions from one view to another using a 3D flip animation. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "flipHorizontal",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>Transitions from one view to another using a horizontal flip animation.\n@platform iphone 1.2.2\n@platform ipad 1.2.2</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "from",
            "doc": "<p>View to fade out.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Titanium.UI.View",
            "name": "to",
            "doc": "<p>View to fade in.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Number",
            "name": "duration",
            "doc": "<p>Fade duration in milliseconds.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback function, invoked after the fade completes.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-flipHorizontal",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 66
          }
        ],
        "shortDoc": "Transitions from one view to another using a horizontal flip animation. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "flipVertical",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>@platform iphone 1.2.2\n@platform ipad 1.2.2\nTransitions from one view to another using a vertical flip animation.</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "from",
            "doc": "<p>View to fade out.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Titanium.UI.View",
            "name": "to",
            "doc": "<p>View to fade in.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Number",
            "name": "duration",
            "doc": "<p>Fade duration in milliseconds.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback function, invoked after the fade completes.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-flipVertical",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 80
          }
        ],
        "shortDoc": "@platform iphone 1.2.2\n@platform ipad 1.2.2\nTransitions from one view to another using a vertical flip animation. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "popIn",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>Makes the specified view appear using a \"pop-in\" animation, which combines a fade-in\nwith a slight expanding and contracting animation, to call attention to the new view.</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "view",
            "doc": "<p>View to animate.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback function, invoked after the popIn completes.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-popIn",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 190
          }
        ],
        "shortDoc": "Makes the specified view appear using a \"pop-in\" animation, which combines a fade-in\nwith a slight expanding and cont...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "shake",
        "owner": "Alloy.builtins.animation",
        "doc": "<p>Creates a shake animation, moving the target view back and forth rapidly several times.</p>\n",
        "params": [
          {
            "type": "Titanium.UI.View",
            "name": "view",
            "doc": "<p>View to animate.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Titanium.UI.View"
          },
          {
            "type": "Number",
            "name": "delay",
            "doc": "<p>If specified, animation starts after <code>delay</code> milliseconds.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          },
          {
            "type": "function()",
            "name": "finishCallback",
            "doc": "<p>Callback function, invoked after the shake completes.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "function()"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-shake",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
            "linenr": 219
          }
        ],
        "shortDoc": "Creates a shake animation, moving the target view back and forth rapidly several times. ...",
        "html_meta": {
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/Alloy/builtins/animation.js",
      "linenr": 1
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy.builtins.dialogs",
  "doc": "<p>A collection of utilities for generating dialog boxes.\nTo use the dialogs builtin library,\nrequire it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>\n\n<pre><code>var dialogs = require('alloy/dialogs');\ndialogs.confirm({});\n</code></pre>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "nop",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.builtins.dialogs",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "tagname": "property",
        "name": "buttonNames",
        "owner": "Alloy.builtins.dialogs",
        "type": "Array",
        "doc": "<p>To be used as default buttonNames for confirm-method AlertDialog</p>\n",
        "default": "[\"No\", \"Yes\"]",
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "property-buttonNames",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/dialogs.js",
            "linenr": 23
          }
        ],
        "shortDoc": "To be used as default buttonNames for confirm-method AlertDialog ...",
        "html_type": "Array",
        "html_meta": {
        }
      },
      {
        "tagname": "property",
        "name": "message",
        "owner": "Alloy.builtins.dialogs",
        "type": "String",
        "doc": "<p>To be used as default message for confirm-method AlertDialog</p>\n",
        "default": "\"Are you sure?\"",
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "property-message",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/dialogs.js",
            "linenr": 17
          }
        ],
        "shortDoc": "To be used as default message for confirm-method AlertDialog ...",
        "html_type": "String",
        "html_meta": {
        }
      },
      {
        "tagname": "property",
        "name": "title",
        "owner": "Alloy.builtins.dialogs",
        "type": "String",
        "doc": "<p>To be used as default title for confirm-method AlertDialog</p>\n",
        "default": "\"Confirm\"",
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "property-title",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/dialogs.js",
            "linenr": 11
          }
        ],
        "shortDoc": "To be used as default title for confirm-method AlertDialog ...",
        "html_type": "String",
        "html_meta": {
        }
      }
    ],
    "method": [
      {
        "tagname": "method",
        "name": "confirm",
        "owner": "Alloy.builtins.dialogs",
        "doc": "<p>Creates a confirmation dialog box. Default values may be overridden and a callback function\nmay be called after an affirmative response.</p>\n",
        "params": [
          {
            "type": "...*",
            "name": "args",
            "doc": "<p>Dialog box parameters.</p>\n",
            "optional": false,
            "default": null,
            "properties": [
              {
                "tagname": "param",
                "doc": "<p>Title of the dialog box.</p>\n",
                "type": "String",
                "name": "title",
                "default": "\"Confirm\"",
                "optional": true,
                "html_type": "String"
              },
              {
                "tagname": "param",
                "doc": "<p>Message of the dialog box.</p>\n",
                "type": "String",
                "name": "message",
                "default": "\"Are you sure?\"",
                "optional": true,
                "html_type": "String"
              },
              {
                "tagname": "param",
                "doc": "<p>Label of the affirmative button of the dialog box.</p>\n",
                "type": "String",
                "name": "yes",
                "default": "\"Yes\"",
                "optional": true,
                "html_type": "String"
              },
              {
                "tagname": "param",
                "doc": "<p>Label of the negative button of the dialog box.</p>\n",
                "type": "String",
                "name": "no",
                "default": "\"No\"",
                "optional": true,
                "html_type": "String"
              },
              {
                "tagname": "param",
                "doc": "<p>Callback function invoked after an affirmative response.</p>\n",
                "type": "Function",
                "name": "callback",
                "optional": true,
                "html_type": "Function"
              },
              {
                "tagname": "param",
                "doc": "<p>Callback context.</p>\n",
                "type": "...*",
                "name": "evt",
                "optional": true,
                "html_type": "...*"
              }
            ],
            "html_type": "...*"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-confirm",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/dialogs.js",
            "linenr": 29
          }
        ],
        "shortDoc": "Creates a confirmation dialog box. ...",
        "html_meta": {
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/Alloy/builtins/dialogs.js",
      "linenr": 1
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy.builtins.measurement",
  "doc": "<p>A collection of utilities for converting between different display units.\nThese functions are only useful on the Android platform to support devices with different\nscreen densities and resolutions.</p>\n\n<p>To use the measurement builtin library,\nrequire it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>\n\n<pre><code>var measurement = require('alloy/measurement');\nvar pointPX = {x:42, y:7};\nvar pointDP = measurement.pointPXToDP(pointPX);\n</code></pre>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "assignment",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.builtins.measurement",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "tagname": "method",
        "name": "dpToPX",
        "owner": "Alloy.builtins.measurement",
        "doc": "<p>Converts a density-independent pixel value to screen pixels.</p>\n",
        "params": [
          {
            "type": "Number",
            "name": "val",
            "doc": "<p>Value in density-independent pixels.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          }
        ],
        "return": {
          "type": "Number",
          "name": "return",
          "doc": "<p>Converted value in screen pixels.</p>\n",
          "properties": null,
          "html_type": "Number"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-dpToPX",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/measurement.js",
            "linenr": 18
          }
        ],
        "shortDoc": "Converts a density-independent pixel value to screen pixels. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "pointPXToDP",
        "owner": "Alloy.builtins.measurement",
        "doc": "<p>Converts a coordinate (x, y) from screen pixels to density-independent pixels.</p>\n",
        "params": [
          {
            "type": "Number",
            "name": "val",
            "doc": "<p>Coordinate in screen pixels.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          }
        ],
        "return": {
          "type": "Number",
          "name": "return",
          "doc": "<p>Converted coordinate in density-independent pixels.</p>\n",
          "properties": null,
          "html_type": "Number"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-pointPXToDP",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/measurement.js",
            "linenr": 50
          }
        ],
        "shortDoc": "Converts a coordinate (x, y) from screen pixels to density-independent pixels. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "pxToDP",
        "owner": "Alloy.builtins.measurement",
        "doc": "<p>Converts a screen pixel value to density-independent pixels.</p>\n",
        "params": [
          {
            "type": "Number",
            "name": "val",
            "doc": "<p>Value in screen pixels.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Number"
          }
        ],
        "return": {
          "type": "Number",
          "name": "return",
          "doc": "<p>Converted value in density-independent pixels.</p>\n",
          "properties": null,
          "html_type": "Number"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-pxToDP",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/measurement.js",
            "linenr": 34
          }
        ],
        "shortDoc": "Converts a screen pixel value to density-independent pixels. ...",
        "html_meta": {
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/Alloy/builtins/measurement.js",
      "linenr": 1
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy.builtins.sha1",
  "doc": "<p>A collection of utilities for calculating SHA-1 or HMAC-SHA-1 values.\nTo use the sha1 builtin library,\nrequire it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>\n\n<pre><code>var sha1 = require('alloy/sha1');\nvar sha1_digest = sha1.hex_sha1('The quick brown fox jumps over the lazy dog.');\n</code></pre>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "assignment",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.builtins.sha1",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "tagname": "method",
        "name": "b64_hmac_sha1",
        "owner": "Alloy.builtins.sha1",
        "doc": "<p>Calculates the HMAC-SHA-1 of a key and some data, and returns the value in base-64.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "key",
            "doc": "<p>Key to use.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          },
          {
            "type": "String",
            "name": "data",
            "doc": "<p>Data to use.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>HMAC-SHA-1 value of the string in base-64.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-b64_hmac_sha1",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/sha1.js",
            "linenr": 76
          }
        ],
        "shortDoc": "Calculates the HMAC-SHA-1 of a key and some data, and returns the value in base-64. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "b64_sha1",
        "owner": "Alloy.builtins.sha1",
        "doc": "<p>Calculates the SHA-1 of a string and returns the value in base-64.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "s",
            "doc": "<p>String to use.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>SHA-1 value of the string in base-64.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-b64_sha1",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/sha1.js",
            "linenr": 45
          }
        ],
        "shortDoc": "Calculates the SHA-1 of a string and returns the value in base-64. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "hex_hmac_sha1",
        "owner": "Alloy.builtins.sha1",
        "doc": "<p>Calculates the HMAC-SHA-1 of a key and some data, and returns the value in hexadecimal.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "key",
            "doc": "<p>Key to use.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          },
          {
            "type": "String",
            "name": "data",
            "doc": "<p>Data to use.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>HMAC-SHA-1 value of the string in hexadecimal.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-hex_hmac_sha1",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/sha1.js",
            "linenr": 65
          }
        ],
        "shortDoc": "Calculates the HMAC-SHA-1 of a key and some data, and returns the value in hexadecimal. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "hex_sha1",
        "owner": "Alloy.builtins.sha1",
        "doc": "<p>Calculates the SHA-1 of a string and returns the value in hexadecimal.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "s",
            "doc": "<p>String to use.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>SHA-1 value of the string in hexadecimal.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-hex_sha1",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/sha1.js",
            "linenr": 35
          }
        ],
        "shortDoc": "Calculates the SHA-1 of a string and returns the value in hexadecimal. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "str_hmac_sha1",
        "owner": "Alloy.builtins.sha1",
        "doc": "<p>Calculates the HMAC-SHA-1 of a key and some data, and returns the value as a string.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "key",
            "doc": "<p>Key to use.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          },
          {
            "type": "String",
            "name": "data",
            "doc": "<p>Data to use.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>HMAC-SHA-1 value of the string as a string.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-str_hmac_sha1",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/sha1.js",
            "linenr": 87
          }
        ],
        "shortDoc": "Calculates the HMAC-SHA-1 of a key and some data, and returns the value as a string. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "str_sha1",
        "owner": "Alloy.builtins.sha1",
        "doc": "<p>Calculates the SHA-1 of a string and returns the value as a string.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "s",
            "doc": "<p>String to use.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>SHA-1 value of the string as a string.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-str_sha1",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/sha1.js",
            "linenr": 55
          }
        ],
        "shortDoc": "Calculates the SHA-1 of a string and returns the value as a string. ...",
        "html_meta": {
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/Alloy/builtins/sha1.js",
      "linenr": 1
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy.builtins.social",
  "doc": "<p>A collection of useful social media provider utilities. Currently, this module only supports\nTwitter and the following features:</p>\n\n<ul>\n<li>Logging into Twitter and authorizing the application through the OAuth protocol.</li>\n<li>Posting tweets to the user's Twitter account.</li>\n</ul>\n\n\n<p>To use the social builtin library, require it with the <code>alloy</code> root\ndirectory in your <code>require</code> call. For example:</p>\n\n<pre><code>var social = require('alloy/social').create({\n    consumerSecret: 'consumer-secret',\n    consumerKey: 'consumer-key'\n});\n</code></pre>\n\n<h2>Login and Authorization</h2>\n\n<p>To use a social media provider, a user must log in and authorize the application to perform\ncertain actions, such as accessing profile information or posting messages.</p>\n\n<p>Call <code>authorize</code> to prompt the user to login and authorize the application.  For Twitter, a\ndialog box will appear asking the user for their permission and login credentials.</p>\n\n<p>Before calling <code>authorize</code>, the application will need a consumer key and secret provided by the\nsocial media service provider for the OAuth protocol, used when calling <code>create</code>.\nFor Twitter, these are provided when registering an application:\n<a href=\"https://dev.twitter.com/apps/new\">https://dev.twitter.com/apps/new</a></p>\n\n<h2>Example</h2>\n\n<p>This example authorizes the application, posts a message to the user's Twitter account, then\ndeauthorizes the application.</p>\n\n<pre><code>// If not authorized, get authorization from the user\nif(!social.isAuthorized()) {\n    social.authorize();\n}\n\n// Post a message\n // Setup both callbacks for confirmation\n // Note: share() automatically calls authorize() so an explicit call as above is unnecessary\nsocial.share({\n    message: \"Salut, Monde!\",\n    success: function(e) {alert('Success!')},\n    error: function(e) {alert('Error!')}\n});\n\n// Deauthorize the application\nsocial.deauthorize();\n</code></pre>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "function",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.builtins.social",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "tagname": "method",
        "name": "authorize",
        "owner": "Alloy.builtins.social",
        "doc": "<p>Authorizes the client to the service provider to access user data.\nIf successful, the client will receive an access token, which will be saved for future\nusage.\nCall this function after opening the parent view or else the authorize UI window will\nappear in the background behind the view and unusable to the user.</p>\n",
        "params": [
          {
            "type": "Function",
            "name": "callback",
            "doc": "<p>Callback function executed after successfully retrieving\nan access token.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Function"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-authorize",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/social.js",
            "linenr": 597
          }
        ],
        "shortDoc": "Authorizes the client to the service provider to access user data. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "create",
        "owner": "Alloy.builtins.social",
        "doc": "<p>Initializes an OAuth session to the service provider.\nIf a previous access token exists, it will be loaded.</p>\n",
        "params": [
          {
            "type": "...*",
            "name": "settings",
            "doc": "<p>OAuth session settings.</p>\n",
            "optional": false,
            "default": null,
            "properties": [
              {
                "tagname": "param",
                "doc": "<p>Site to access. Only 'twitter' is working.</p>\n",
                "type": "String",
                "name": "site",
                "default": "\"twitter\"",
                "optional": true,
                "html_type": "String"
              },
              {
                "tagname": "param",
                "doc": "<p>Shared secret used to authenticate the key.</p>\n",
                "type": "String",
                "name": "consumerSecret",
                "html_type": "String"
              },
              {
                "tagname": "param",
                "doc": "<p>Key used to identify the client to the service provider.</p>\n",
                "type": "String",
                "name": "consumerKey",
                "html_type": "String"
              }
            ],
            "html_type": "...*"
          }
        ],
        "return": {
          "type": "Object",
          "name": "return",
          "doc": "<p>Instance of social to make subsequent API calls.</p>\n",
          "properties": null,
          "html_type": "Object"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-create",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/social.js",
            "linenr": 566
          }
        ],
        "shortDoc": "Initializes an OAuth session to the service provider. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "deauthorize",
        "owner": "Alloy.builtins.social",
        "doc": "<p>Deauthorizes the client and clears the access token.</p>\n",
        "params": [

        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-deauthorize",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/social.js",
            "linenr": 590
          }
        ],
        "shortDoc": "Deauthorizes the client and clears the access token. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "isAuthorized",
        "owner": "Alloy.builtins.social",
        "doc": "<p>Returns 'true' if the client is authorized by the service provider.</p>\n",
        "params": [

        ],
        "return": {
          "type": "Boolean",
          "name": "return",
          "doc": "<p>Returns 'true' if authorized else 'false'.</p>\n",
          "properties": null,
          "html_type": "Boolean"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-isAuthorized",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/social.js",
            "linenr": 582
          }
        ],
        "shortDoc": "Returns 'true' if the client is authorized by the service provider. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "share",
        "owner": "Alloy.builtins.social",
        "doc": "<p>Sends an update to the service provider. Implicitly calls authorize() to authorize your app.</p>\n",
        "params": [
          {
            "type": "...*",
            "name": "options",
            "doc": "<p>Update parameters.</p>\n",
            "optional": false,
            "default": null,
            "properties": [
              {
                "tagname": "param",
                "doc": "<p>Message to send.</p>\n",
                "type": "String",
                "name": "message",
                "html_type": "String"
              },
              {
                "tagname": "param",
                "doc": "<p>Callback function executed after a successful update.</p>\n",
                "type": "Function",
                "name": "success",
                "optional": true,
                "html_type": "Function"
              },
              {
                "tagname": "param",
                "doc": "<p>Callback function executed after a failed update.</p>\n",
                "type": "Function",
                "name": "error",
                "optional": true,
                "html_type": "Function"
              }
            ],
            "html_type": "...*"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-share",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/social.js",
            "linenr": 619
          }
        ],
        "shortDoc": "Sends an update to the service provider. ...",
        "html_meta": {
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/Alloy/builtins/social.js",
      "linenr": 1
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy.builtins.string",
  "doc": "<p>A collection of utilities for manipulating strings.\nTo use the string builtin library,\nrequire it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>\n\n<pre><code>var string = require('alloy/string');\nvar text = '     hola, mundo   ';\nTi.API.info(string.ucfirst(string.trim(text))); // --&gt; 'Hola, mundo'\n</code></pre>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "nop",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.builtins.string",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "tagname": "method",
        "name": "formatCurrency",
        "owner": "Alloy.builtins.string",
        "doc": "<p>Returns an amount formatted as a currency value.\nUses the device settings to determine the currency symbol.\nOn the Mobile Web platform, the currency symbol will always be dollars ('$').</p>\n",
        "params": [
          {
            "type": "String",
            "name": "amount",
            "doc": "<p>Amount to format.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>Amount formatted as a currency value.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-formatCurrency",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/string.js",
            "linenr": 59
          }
        ],
        "shortDoc": "Returns an amount formatted as a currency value. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "lcfirst",
        "owner": "Alloy.builtins.string",
        "doc": "<p>Lowercases the first character in the string.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "text",
            "doc": "<p>String to lowercase.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>String with first character lowercased.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-lcfirst",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/string.js",
            "linenr": 47
          }
        ],
        "shortDoc": "Lowercases the first character in the string. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "trim",
        "owner": "Alloy.builtins.string",
        "doc": "<p>Removes leading and trailing white space from a string.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "line",
            "doc": "<p>String to trim.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>String without leading and trailing white space.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-trim",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/string.js",
            "linenr": 12
          }
        ],
        "shortDoc": "Removes leading and trailing white space from a string. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "trimZeros",
        "owner": "Alloy.builtins.string",
        "doc": "<p>Removes trailing zeroes from a float value after the decimal point.</p>\n",
        "params": [
          {
            "type": "Object",
            "name": "num",
            "doc": "<p>Number to trim.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "Number",
          "name": "return",
          "doc": "<p>Number without trailing zeroes.</p>\n",
          "properties": null,
          "html_type": "Number"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-trimZeros",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/string.js",
            "linenr": 22
          }
        ],
        "shortDoc": "Removes trailing zeroes from a float value after the decimal point. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "ucfirst",
        "owner": "Alloy.builtins.string",
        "doc": "<p>Capitalizes the first character in the string.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "text",
            "doc": "<p>String to capitalize.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>String with first character capitalized.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-ucfirst",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/string.js",
            "linenr": 35
          }
        ],
        "shortDoc": "Capitalizes the first character in the string. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "urlDecode",
        "owner": "Alloy.builtins.string",
        "doc": "<p>Converts URL-encoded characters in a string to ASCII characters.\nFor example, the string '%38' will return '&amp;'.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "url",
            "doc": "<p>String to process.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "String",
          "name": "return",
          "doc": "<p>String with URL-encoded characters replaced with ASCII characters.</p>\n",
          "properties": null,
          "html_type": "String"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-urlDecode",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/string.js",
            "linenr": 73
          }
        ],
        "shortDoc": "Converts URL-encoded characters in a string to ASCII characters. ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "urlToJson",
        "owner": "Alloy.builtins.string",
        "doc": "<p>Parses an URL and converts it to JSON-formatted data.\nFor example, an URL with a query string will produce a JSON object with each query field paired\nwith its value as well as the base URL.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "url",
            "doc": "<p>URL to process.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          }
        ],
        "return": {
          "type": "Object",
          "name": "return",
          "doc": "<p>JSON-formatted URL data.</p>\n",
          "properties": null,
          "html_type": "Object"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-urlToJson",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/string.js",
            "linenr": 89
          }
        ],
        "shortDoc": "Parses an URL and converts it to JSON-formatted data. ...",
        "html_meta": {
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/Alloy/builtins/string.js",
      "linenr": 1
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy",
  "doc": "<p>Top-level module for Alloy functions.</p>\n\n<p>Alloy is an application framework built on top of the Titanium SDK designed to help rapidly\ndevelop high quality applications and reduce maintenance.</p>\n\n<p>Alloy uses the model-view-controller architecture to separate the application into three\ncomponents:</p>\n\n<ul>\n<li><p><strong>Models</strong> provide the data of the application. Alloy utilizes <strong>Backbone Model and Collection</strong>\n objects for this functionality.</p></li>\n<li><p><strong>Views</strong> provide the UI components to interact with the application, written using <strong>XML markup</strong>\nand <strong>Titanium Stylesheets (TSS)</strong>, which abstracts the UI components of the Titanium API.</p></li>\n<li><p><strong>Controllers</strong> provide the glue layer between the Model and View components as well as\nadditional application logic using the <strong>Alloy API</strong> and <strong>Titanium API</strong>.</p></li>\n</ul>\n\n\n<p>The API documentation provided here is used with Alloy Controllers and Widget Controllers to\ninteract with the View and Model components of the application or widget.</p>\n\n<p>For guides on using Alloy, see\n<a href=\"http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Framework\">Alloy Framework</a>.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "assignment",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [
      {
        "tagname": "property",
        "name": "CFG",
        "owner": "Alloy",
        "type": "Object",
        "doc": "<p>An object that stores Alloy configuration values as defined in your app's\napp/config.json file. Here's what a typical config.json file might look\nlike in an Alloy app.</p>\n\n<pre><code>{\n    \"global\": { \"key\": \"defaultValue\", \"anotherKey\": 12345 },\n    \"env:development\": {},\n    \"env:test\": {},\n    \"env:production\": {},\n    \"os:ios\": { \"key\": \"iosValue\" },\n    \"os:android\": { \"key\": \"androidValue\" },\n    \"dependencies\": {}\n}\n</code></pre>\n\n<p>If this app was compiled for iOS, the <a href=\"#!/api/Alloy-static-property-CFG\" rel=\"Alloy-static-property-CFG\" class=\"docClass\">Alloy.CFG</a> would look like this:</p>\n\n<pre><code><a href=\"#!/api/Alloy-static-property-CFG\" rel=\"Alloy-static-property-CFG\" class=\"docClass\">Alloy.CFG</a> = {\n    \"key\": \"iosValue\",\n    \"anotherKey\": 12345\n}\n</code></pre>\n\n<p><a href=\"#!/api/Alloy-static-property-CFG\" rel=\"Alloy-static-property-CFG\" class=\"docClass\">Alloy.CFG</a> is accessible in any controller in your app, and can be accessed\nin other non-controller Javascript files like this:</p>\n\n<pre><code>var theKey = require('alloy').CFG.key;\n</code></pre>\n",
        "default": null,
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-property-CFG",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
            "linenr": 577
          }
        ],
        "shortDoc": "An object that stores Alloy configuration values as defined in your app's\napp/config.json file. ...",
        "html_type": "Object",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "property",
        "name": "Collections",
        "owner": "Alloy",
        "type": "Object",
        "doc": "<p>An object for storing globally accessible Alloy collections. Singleton collections\ncreated via markup will be stored on this object.</p>\n\n<pre><code>&lt;Collection src=\"myModel\"/&gt;\n</code></pre>\n\n<p>The above markup would effectively generate the following code:</p>\n\n<pre><code>Alloy.Collections.myModel = <a href=\"#!/api/Alloy-static-method-createCollection\" rel=\"Alloy-static-method-createCollection\" class=\"docClass\">Alloy.createCollection</a>('MyModel');\n</code></pre>\n\n<p>Alloy.Collections.myModel would then be accessible in any controller in your app.</p>\n",
        "default": "{}",
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-property-Collections",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
            "linenr": 551
          }
        ],
        "shortDoc": "An object for storing globally accessible Alloy collections. ...",
        "html_type": "Object",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "property",
        "name": "Globals",
        "owner": "Alloy",
        "type": "Object",
        "doc": "<p>An object for storing globally accessible variables and functions.\n<a href=\"#!/api/Alloy-static-property-Globals\" rel=\"Alloy-static-property-Globals\" class=\"docClass\">Alloy.Globals</a> is accessible in any controller in your app:</p>\n\n<pre><code>Alloy.Globals.someGlobalObject = { key: 'value' };\nAlloy.Globals.someGlobalFunction = function(){};\n</code></pre>\n\n<p><a href=\"#!/api/Alloy-static-property-Globals\" rel=\"Alloy-static-property-Globals\" class=\"docClass\">Alloy.Globals</a> can be accessed in other non-controller Javascript files\nlike this:</p>\n\n<pre><code>var theObject = require('alloy').Globals.someGlobalObject;\n</code></pre>\n",
        "default": "{}",
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-property-Globals",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
            "linenr": 508
          }
        ],
        "shortDoc": "An object for storing globally accessible variables and functions. ...",
        "html_type": "Object",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "property",
        "name": "Models",
        "owner": "Alloy",
        "type": "Object",
        "doc": "<p>An object for storing globally accessible Alloy models. Singleton models\ncreated via markup will be stored on this object.</p>\n\n<pre><code>&lt;Model src=\"myModel\"/&gt;\n</code></pre>\n\n<p>The above markup would effectively generate the following code:</p>\n\n<pre><code>Alloy.Models.myModel = <a href=\"#!/api/Alloy-static-method-createModel\" rel=\"Alloy-static-method-createModel\" class=\"docClass\">Alloy.createModel</a>('MyModel');\n</code></pre>\n\n<p>Alloy.Models.myModel would then be accessible in any controller in your app.</p>\n",
        "default": "{}",
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-property-Models",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
            "linenr": 525
          }
        ],
        "shortDoc": "An object for storing globally accessible Alloy models. ...",
        "html_type": "Object",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "property",
        "name": "isHandheld",
        "owner": "Alloy",
        "type": "Boolean",
        "doc": "<p><code>true</code> if the current device is a handheld device (not a tablet).</p>\n",
        "default": null,
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-property-isHandheld",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
            "linenr": 500
          }
        ],
        "html_type": "Boolean",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "property",
        "name": "isTablet",
        "owner": "Alloy",
        "type": "Boolean",
        "doc": "<p><code>true</code> if the current device is a tablet.</p>\n",
        "default": null,
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-property-isTablet",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
            "linenr": 465
          }
        ],
        "html_type": "Boolean",
        "html_meta": {
          "static": null
        }
      }
    ],
    "method": [
      {
        "tagname": "method",
        "name": "createCollection",
        "owner": "Alloy",
        "doc": "<p>Factory method for instantiating a Backbone collection of model objects. Creates and returns a\ncollection for holding the named type of model objects.</p>\n\n<p>See <a href=\"http://docs.appcelerator.com/backbone/0.9.2/#Collection\">Backbone.Collection</a> in the Backbone.js\ndocumentation for  information on the methods and  properties provided by the\nCollection object.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "name",
            "doc": "<p>Name of model to hold in this collection.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          },
          {
            "type": "Object",
            "name": "args",
            "doc": "<p>Arguments to pass to the collection.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "Backbone.Collection",
          "name": "return",
          "doc": "<p>Backbone collection object.</p>\n",
          "properties": null,
          "html_type": "Backbone.Collection"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-createCollection",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
            "linenr": 441
          }
        ],
        "shortDoc": "Factory method for instantiating a Backbone collection of model objects. ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "createController",
        "owner": "Alloy",
        "doc": "<p>Factory method for instantiating a controller. Creates and returns an instance of the\nnamed controller.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "name",
            "doc": "<p>Name of controller to instantiate.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          },
          {
            "type": "Object",
            "name": "args",
            "doc": "<p>Arguments to pass to the controller.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "Alloy.Controller",
          "name": "return",
          "doc": "<p>Alloy controller object.</p>\n",
          "properties": null,
          "html_type": "Alloy.Controller"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-createController",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
            "linenr": 412
          }
        ],
        "shortDoc": "Factory method for instantiating a controller. ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "createModel",
        "owner": "Alloy",
        "doc": "<p>Factory method for instantiating a Backbone Model object. Creates and returns an instance of the\nnamed model.</p>\n\n<p>See <a href=\"http://docs.appcelerator.com/backbone/0.9.2/#Model\">Backbone.Model</a> in the Backbone.js documentation for\ninformation on the methods and properties provided by the Model object.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "name",
            "doc": "<p>Name of model to instantiate.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          },
          {
            "type": "Object",
            "name": "args",
            "doc": "<p>Arguments to pass to the model.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "Backbone.Model",
          "name": "return",
          "doc": "<p>Backbone model object.</p>\n",
          "properties": null,
          "html_type": "Backbone.Model"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-createModel",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
            "linenr": 425
          }
        ],
        "shortDoc": "Factory method for instantiating a Backbone Model object. ...",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "method",
        "name": "createWidget",
        "owner": "Alloy",
        "doc": "<p>Factory method for instantiating a widget controller. Creates and returns an instance of the\nnamed widget.</p>\n",
        "params": [
          {
            "type": "String",
            "name": "id",
            "doc": "<p>Id of widget to instantiate.</p>\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "String"
          },
          {
            "type": "String",
            "name": "name",
            "doc": "<p>Name of the view within the widget to instantiate ('widget' by default)</p>\n",
            "optional": true,
            "default": "\"widget\"",
            "properties": [

            ],
            "html_type": "String"
          },
          {
            "type": "Object",
            "name": "args",
            "doc": "<p>Arguments to pass to the widget.</p>\n",
            "optional": true,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "Alloy.Controller",
          "name": "return",
          "doc": "<p>Alloy widget controller object.</p>\n",
          "properties": null,
          "html_type": "Alloy.Controller"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-method-createWidget",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
            "linenr": 393
          }
        ],
        "shortDoc": "Factory method for instantiating a widget controller. ...",
        "html_meta": {
          "static": null
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/Alloy/lib/alloy.js",
      "linenr": 1
    },
    {
      "filename": "/Users/Mo/projects/alloy/Alloy/template/app.js",
      "linenr": 1
    }
  ],
  "private": null,
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Alloy.widgets",
  "doc": "<p>The sample widgets are no longer supplied or supported and have been removed from Alloy.</p>\n\n<p>Maintained versions of the sample widgets are available at <a href=\"http://gitt.io/\">http://gitt.io/</a>.</p>\n\n<p>For information on using a widget in your project, see\n<a href=\"#!/api/Alloy.Widget\" rel=\"Alloy.Widget\" class=\"docClass\">Alloy.Widget</a>.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "nop",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Alloy.widgets",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/docs/apidoc/widgets.js",
      "linenr": 126
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "AlloyStyleDict",
  "doc": "<p>@typestr Object\n@since 1.2.0\n@pseudo\nSimple JavaScript object of properties and TSS classes to apply to a Titanium UI object.</p>\n\n<p>All properties are optional.</p>\n\n<p>The <code>apiName</code> property is only specified with the <code>createStyle</code> method.</p>\n\n<p>In addition to the properties defined below, you can also specify properties related to the\ncomponent.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "nop",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-AlloyStyleDict",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [
      {
        "tagname": "property",
        "name": "apiName",
        "owner": "AlloyStyleDict",
        "type": "String",
        "doc": "<p>Name of the Titanium UI object. This can either be the full class name, such as\n<code>Ti.UI.Button</code>, or the XML element, such as <code>Button</code>.</p>\n\n<p>Specified only with createStyle.</p>\n",
        "default": null,
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-property-apiName",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/docs/apidoc/controller.js",
            "linenr": 41
          }
        ],
        "shortDoc": "Name of the Titanium UI object. ...",
        "html_type": "String",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "property",
        "name": "classes",
        "owner": "AlloyStyleDict",
        "type": "Array<String>",
        "doc": "<p>Array of TSS classes to apply to the Titanium UI object.</p>\n",
        "default": null,
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-property-classes",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/docs/apidoc/controller.js",
            "linenr": 51
          }
        ],
        "html_type": "Array<String>",
        "html_meta": {
          "static": null
        }
      },
      {
        "tagname": "property",
        "name": "id",
        "owner": "AlloyStyleDict",
        "type": "String",
        "doc": "<p>TSS ID style to apply to the Titanium UI object.</p>\n",
        "default": null,
        "properties": null,
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
          "static": true
        },
        "id": "static-property-id",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/docs/apidoc/controller.js",
            "linenr": 58
          }
        ],
        "html_type": "String",
        "html_meta": {
          "static": null
        }
      }
    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/docs/apidoc/controller.js",
      "linenr": 26
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "Language",
  "doc": "<hr />\n\n<pre><code>    Constructors\n</code></pre>\n\n<hr />\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "code_type": "function",
  "inheritable": false,
  "inheritdoc": null,
  "meta": {
  },
  "id": "class-Language",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "tagname": "property",
        "name": "",
        "owner": "Language",
        "type": "Object",
        "doc": "<hr />\n\n<pre><code>    Default Lang\n</code></pre>\n\n<hr />\n",
        "default": null,
        "properties": [

        ],
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "property-",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/moment.js",
            "linenr": 2556
          }
        ],
        "html_type": "Object",
        "html_meta": {
        }
      }
    ],
    "method": [
      {
        "tagname": "method",
        "name": "extend",
        "owner": "Language",
        "doc": "<hr />\n\n<pre><code>    Helpers\n</code></pre>\n\n<hr />\n",
        "params": [
          {
            "type": "Object",
            "name": "a",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Object",
            "name": "b",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-extend",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/moment.js",
            "linenr": 411
          }
        ],
        "shortDoc": "Helpers ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "getParseRegexForToken",
        "owner": "Language",
        "doc": "<hr />\n\n<pre><code>    Parsing\n</code></pre>\n\n<hr />\n",
        "params": [
          {
            "type": "Object",
            "name": "token",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Object",
            "name": "config",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-getParseRegexForToken",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/moment.js",
            "linenr": 984
          }
        ],
        "shortDoc": "Parsing ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "makeGlobal",
        "owner": "Language",
        "doc": "<hr />\n\n<pre><code>    Exposing Moment\n</code></pre>\n\n<hr />\n",
        "params": [
          {
            "type": "Object",
            "name": "shouldDeprecate",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-makeGlobal",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/moment.js",
            "linenr": 2575
          }
        ],
        "shortDoc": "Exposing Moment ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "makeMoment",
        "owner": "Language",
        "doc": "<hr />\n\n<pre><code>    Top Level Functions\n</code></pre>\n\n<hr />\n",
        "params": [
          {
            "type": "Object",
            "name": "config",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-makeMoment",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/moment.js",
            "linenr": 1645
          }
        ],
        "shortDoc": "Top Level Functions ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "removeFormattingTokens",
        "owner": "Language",
        "doc": "<hr />\n\n<pre><code>    Formatting\n</code></pre>\n\n<hr />\n",
        "params": [
          {
            "type": "Object",
            "name": "input",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-removeFormattingTokens",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/moment.js",
            "linenr": 918
          }
        ],
        "shortDoc": "Formatting ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "substituteTimeAgo",
        "owner": "Language",
        "doc": "<hr />\n\n<pre><code>    Relative Time\n</code></pre>\n\n<hr />\n",
        "params": [
          {
            "type": "Object",
            "name": "string",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Object",
            "name": "number",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Object",
            "name": "withoutSuffix",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Object",
            "name": "isFuture",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Object",
            "name": "lang",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-substituteTimeAgo",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/moment.js",
            "linenr": 1564
          }
        ],
        "shortDoc": "Relative Time ...",
        "html_meta": {
        }
      },
      {
        "tagname": "method",
        "name": "weekOfYear",
        "owner": "Language",
        "doc": "<hr />\n\n<pre><code>    Week of Year\n</code></pre>\n\n<hr />\n",
        "params": [
          {
            "type": "Object",
            "name": "mom",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Object",
            "name": "firstDayOfWeek",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          },
          {
            "type": "Object",
            "name": "firstDayOfWeekOfYear",
            "doc": "\n",
            "optional": false,
            "default": null,
            "properties": [

            ],
            "html_type": "Object"
          }
        ],
        "return": {
          "type": "undefined",
          "name": "return",
          "doc": "\n",
          "properties": [

          ],
          "html_type": "undefined"
        },
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "method-weekOfYear",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/moment.js",
            "linenr": 1597
          }
        ],
        "shortDoc": "Week of Year ...",
        "html_meta": {
        }
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "files": [
    {
      "filename": "/Users/Mo/projects/alloy/Alloy/builtins/moment.js",
      "linenr": 363
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ]
}{
  "tagname": "class",
  "name": "global",
  "doc": "<p>Global variables and functions.</p>\n",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "tagname": "property",
        "name": "moment",
        "owner": "global",
        "type": "Object",
        "doc": "<hr />\n\n<pre><code>    Constants\n</code></pre>\n\n<hr />\n",
        "default": null,
        "properties": [

        ],
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "property-moment",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/builtins/moment.js",
            "linenr": 9
          }
        ],
        "html_type": "Object",
        "html_meta": {
        }
      },
      {
        "tagname": "property",
        "name": "program",
        "owner": "global",
        "type": "Object",
        "doc": "<p>Alloy\nCopyright (c) 2012 by Appcelerator, Inc. All Rights Reserved.\nSee LICENSE for more information on licensing.</p>\n",
        "default": null,
        "properties": [

        ],
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "property-program",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/alloy.js",
            "linenr": 1
          }
        ],
        "shortDoc": "Alloy\nCopyright (c) 2012 by Appcelerator, Inc. ...",
        "html_type": "Object",
        "html_meta": {
        }
      },
      {
        "tagname": "property",
        "name": "uglifyjs",
        "owner": "global",
        "type": "Object",
        "doc": "<p>Code in this file will attempt to optimize generated code so it's more compact\nand executes faster, better, etc.</p>\n",
        "default": null,
        "properties": [

        ],
        "inheritable": false,
        "inheritdoc": null,
        "meta": {
        },
        "id": "property-uglifyjs",
        "files": [
          {
            "filename": "/Users/Mo/projects/alloy/Alloy/commands/compile/optimizer.js",
            "linenr": 1
          }
        ],
        "html_type": "Object",
        "html_meta": {
        }
      }
    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "aliases": {
  },
  "meta": {
  },
  "files": [
    {
      "filename": "",
      "linenr": 0,
      "href": ""
    }
  ],
  "html_meta": {
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "requires": [

  ],
  "uses": [

  ]
}
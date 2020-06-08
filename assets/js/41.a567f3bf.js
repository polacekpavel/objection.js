(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{395:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"indexing-postgresql-jsonb-columns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexing-postgresql-jsonb-columns"}},[t._v("#")]),t._v(" Indexing PostgreSQL JSONB columns")]),t._v(" "),a("p",[t._v("Good reading on the subject:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.2ndquadrant.com/jsonb-type-performance-postgresql-9-4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSONB type performance in PostgreSQL 9.4"),a("OutboundLink")],1),t._v(" and")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://paquier.xyz/postgresql-2/postgres-9-4-feature-highlight-indexing-jsonb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postgres 9.4 feature highlight - Indexing JSON data with jsonb data type"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"general-inverted-indexes-a-k-a-gin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-inverted-indexes-a-k-a-gin"}},[t._v("#")]),t._v(" General Inverted Indexes a.k.a. GIN")]),t._v(" "),a("p",[t._v("This is the index type which makes all JSONB set operations fast. All "),a("code",[t._v("isSuperset")]),t._v(" / "),a("code",[t._v("isSubset")]),t._v(" / "),a("code",[t._v("hasKeys")]),t._v(" / "),a("code",[t._v("hasValues")]),t._v(" etc. queries can use this index to speed ’em up. Usually this is the index you want and it may take around 30% extra space on the DB server.")]),t._v(" "),a("p",[t._v("If one likes to use only the subset/superset operators with faster and smaller index one can give an extra "),a("code",[t._v("path_ops")]),t._v(" parameter when creating the index: "),a("a",{attrs:{href:"https://wiki.postgresql.org/wiki/What's_new_in_PostgreSQL_9.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("“The path_ops index supports only the search path operator "),a("code",[t._v("@>")]),t._v(" (see below), but produces a smaller and faster index for these kinds of searches.”"),a("OutboundLink")],1),t._v(". According to Marco Nenciarini’s post the speed up can be over 600% compared to full GIN index and the size of the index is reduced from ~30% -> ~20%.")]),t._v(" "),a("p",[t._v("Full GIN index to speed up all type of json queries:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("raw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CREATE INDEX on ?? USING GIN (??)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hero'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'details'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Partial GIN index to speed up all subset / superset type of json queries:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("raw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CREATE INDEX on ?? USING GIN (?? jsonb_path_ops)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Place'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'details'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"index-on-expression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-on-expression"}},[t._v("#")]),t._v(" Index on Expression")]),t._v(" "),a("p",[t._v("Another type of index one may use for JSONB field is to create an expression index for example for a certain JSON field inside a column.")]),t._v(" "),a("p",[t._v("You might want to use these if you are using lots of "),a("code",[t._v(".where(ref('jsonColumn:details.name').castText(), 'marilyn')")]),t._v(" type of queries, which cannot be sped up with GIN index.")]),t._v(" "),a("p",[t._v("Use of these indexes are more limited, but they are also somewhat faster than using GIN and querying e.g. "),a("code",[t._v("{ field: value }")]),t._v(" with subset operator. GIN indices also takes a lot of space in compared to expression index for certain field. So if you want to make just certain query to go extra fast you may consider using index on expression.")]),t._v(" "),a("p",[t._v("An expression index referring an internal "),a("code",[t._v("details.name")]),t._v(" attribute of an object stored in "),a("code",[t._v("jsonColumn")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("raw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"CREATE INDEX on ?? ((??#>>'{details,name}'))\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hero'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsonColumn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"complete-migration-example-and-created-tables-indexes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complete-migration-example-and-created-tables-indexes"}},[t._v("#")]),t._v(" Complete Migration Example and Created Tables / Indexes")]),t._v(" "),a("p",[t._v("Complete example how to try out different index choices.")]),t._v(" "),a("p",[t._v("Migration:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("up")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("knex")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" knex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("schema\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hero'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("primary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jsonb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'details'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      table\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'homeId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsigned")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("references")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inTable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Place'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("raw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CREATE INDEX on ?? USING GIN (??)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hero'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'details'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("raw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"CREATE INDEX on ?? ((??#>>'{type}'))\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hero'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'details'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Place'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("primary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jsonb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'details'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("raw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CREATE INDEX on ?? USING GIN (?? jsonb_path_ops)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Place'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'details'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Results following schema:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("objection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jsonb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# \\d "Hero"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"public.Hero"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Column")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Type")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("---------+------------------------")]),t._v("\n id      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("integer")]),t._v("\n name    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varying")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n details "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jsonb\n homeId  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("integer")]),t._v("\nIndexes:\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hero_pkey"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("btree")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hero_details_idx"')]),t._v(" gin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("details"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hero_expr_idx"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("btree")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("details "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#>> '{type}'::text[]))")]),t._v("\n\nobjection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jsonb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# \\d "Place"')]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"public.Place"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Column")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Type")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("---------+------------------------")]),t._v("\n id      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("integer")]),t._v("\n name    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varying")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n details "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jsonb\nIndexes:\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Place_pkey"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("btree")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Place_details_idx"')]),t._v(" gin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("details jsonb_path_ops"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Expression index is used for example for following query:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hero"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" details"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#>>'{type}' = 'Hero';")]),t._v("\n\n                           QUERY "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PLAN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------------------------------------------------------------")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Index")]),t._v(" Scan "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hero_expr_idx"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hero"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Index")]),t._v(" Cond: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("details "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#>> '{type}'::text[]) = 'Hero'::text)")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
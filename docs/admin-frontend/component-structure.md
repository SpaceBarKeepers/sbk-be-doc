---
sidebar_position: 1
---

# Admin Frontend Component structure

## Component relationships

```md
App
├── Landing (page)
│   ├── Loading
│   ├── Header
│   │   ├── Logo
│   │   └── Auth
│   └── Footer
├── Admin (page)
│   ├── Loading
│   ├── Header
│   │   ├── Logo
│   │   └── Auth
│   ├── MainMenu
│   │   └── MenuItem
│   ├── Dashboard
│   ├── MediaLibrary
│   │   ├── ToolboxMedia
│   │   ├── MediaTable
│   │   └── MediaForm
│   │       └── UploadDialogMedia
│   └── ContentLibrary
│       ├── Toolbox
│       └── ContentTable
├── CreateItem (page)
│   ├── Loading
│   ├── Header
│   │   ├── Logo
│   │   └── Auth
│   ├── MainMenu
│   │   └── MenuItem
│   └── ContentEditor
│       ├── ToolboxContentEditor
│       └── EditorFragments
│           ├── CheckBoxWithTwoTextFieldsFragment
│           ├── DatetimeFragment
│           ├── DropdownFragment
│           ├── RichtextEditorFragment
│           ├── ImageCardFragment
│           ├── ImagePickerFragment
│           ├── LinkFragment
│           ├── MediaPickerFragment
│           ├── TextareaFragment
│           ├── TextfieldFragment
│           └── ToggleFragment
└── EditItem (page)
    ├── Loading
    ├── Header
    │   ├── Logo
    │   └── Auth
    ├── MainMenu
    │   └── MenuItem
    └── ContentEditor
        ├── ToolboxContentEditor
        └── EditorFragments
            ├── CheckBoxWithTwoTextFieldsFragment
            ├── DatetimeFragment
            ├── DropdownFragment
            ├── RichtextEditorFragment
            ├── ImageCardFragment
            ├── ImagePickerFragment
            ├── LinkFragment
            ├── MediaPickerFragment
            ├── TextareaFragment
            ├── TextfieldFragment
            └── ToggleFragment
```

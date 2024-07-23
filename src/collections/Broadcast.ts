import { CollectionConfig, Option } from "payload";

const BroadcastType: Option[] = [
  {
    label: "Announcement",
    value: "announcement",
  },
  {
    label: "Media Release",
    value: "media_release",
  },
];

export const Broadcast: CollectionConfig = {
  slug: "broadcast",
  labels: {
    singular: "Broadcast",
    plural: "Broadcasts",
  },
  admin: {
    listSearchableFields: ["title", "description", "type"],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      label: "Broadcast Title",
      type: "text",
      required: true,
      localized: true,
      admin: {
        placeholder: "Pelancaran Inisiatif 5G Nasional",
      },
    },
    {
      name: "type",
      label: "Broadcast Type",
      type: "select",
      required: true,
      options: BroadcastType,
    },
    {
      name: "date",
      label: "Broadcast Date",
      type: "date",
      required: true,
    },
    {
      name: "description",
      label: "Short Description",
      type: "textarea",
      required: true,
      localized: true,
      maxLength: 140,
      admin: {
        placeholder: "Brief description about this broadcast",
        rows: 2,
      },
    },
    {
      name: "broadcast_text",
      label: "Broadcast Content",
      type: "richText",
      required: true,
      localized: true,
    },
    // Side-bar
    {
      name: "isPin",
      label: "Pin this broadcast",
      type: "checkbox",
      admin: {
        position: "sidebar",
      },
      defaultValue: false,
    },
    {
      name: "broadcast_file",
      label: "Attachment File",
      type: "upload",
      required: true,
      relationTo: "media",
      admin: {
        position: "sidebar",
      },
    },
  ],
};

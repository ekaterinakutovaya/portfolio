export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'titleEn',
        title: 'TitleEN',
        type: 'string',
      },
      {
        name: 'title',
        title: 'TitleEN',
        type: 'string',
      },
      {
        name: 'titleRu',
        title: 'TitleRu',
        type: 'string',
      },
      {
        name: 'description',
        title: 'DescriptionEn',
        type: 'text',
      },
      {
        name: 'descriptionEn',
        title: 'DescriptionEn',
        type: 'text',
      },
      {
        name: 'descriptionRu',
        title: 'DescriptionRu',
        type: 'text',
      },
      {
        name: 'stack',
        title: 'stack',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };
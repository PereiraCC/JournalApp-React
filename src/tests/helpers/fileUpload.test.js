// import cloudinary from 'cloudinary';

import { fileUpload } from '../../helpers/fileUpload';

// cloudinary.config({ 
//     cloud_name: 'dq9lyumwg', 
//     api_key: '141883338136336', 
//     api_secret: 'G26IQOnnaTR6iIzbhWrdgx2dXfY',
// });

describe('fileUpload tests ', () => {

    test('must load a file and return the url', async() => {

        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([blob], 'picture.png');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        // const segments = url.split('/');
        // const imageID = segments[ segments.length - 1 ].replace('.png', '');

        // cloudinary.v2.api.delete_resources(`${imageID}`, {}, (error,result ) => {
        //     console.log(error,result);
        // });

    });

    test('must resturn an error', async () => {

        const file = new File([], 'picture.png');
        const url = await fileUpload( file );

        expect( url ).toBe( null );

    });
});
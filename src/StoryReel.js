import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className= "storyReel">
            <Story 
            image = 'https://spiderimg.amarujala.com/assets/images/2017/01/12/750x506/swami-vivekanand_1484201932.jpeg'
            profileSrc = 'https://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2019/01/12/5842-swami-vivekanand.jpg?itok=Git6oZyw'
            title = 'Swami vivekanand'
            />
            <Story
            image ='https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTMwMDE1ODk5NzU0MTc5MjAz/bhagat-singhjpg.jpg'
            profileSrc = 'https://nayadaur.tv/wp-content/uploads/2018/06/bhagat-singh-ji.jpg'
            title = 'Bhagat Singh'
            />
            <Story
            image ='https://img.etimg.com/thumb/msid-25287529,width-1200,height-900,imgsize-41504,overlay-economictimes/photo.jpg'
            profileSrc = 'https://images.news18.com/ibnlive/uploads/2018/10/statue-of-Sardar-Vallabhbhai-Patel.jpg'
            title = 'Sardar Patel'
            />
            <Story
            image ='https://img.etimg.com/thumb/width-640,height-480,imgsize-197883,resizemode-1,msid-50230154/industry/services/education/american-university-announces-apj-abdul-kalam-fellowship-for-indian-students.jpg'
            profileSrc = 'https://i1.wp.com/www.opindia.com/wp-content/uploads/2019/10/images-42.jpeg?resize=650%2C400&ssl=1'
            title = 'Dr. Abdul Kalam'
            />
            <Story
            image ='https://images.news18.com/ibnlive/uploads/2019/01/Lal-Bahadur-Shastri-rare-pics.jpg'
            profileSrc = 'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2019/10/02/872518-lal-bahadur-shastri.jpg?itok=YW-8_I9G'
            title = 'Lal Bahadur Shastri'
            />
        </div>
    )
}

export default StoryReel

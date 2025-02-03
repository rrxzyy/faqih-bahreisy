import { Fragment, useContext } from 'react';
import { UserAuthContext } from '../../../context/UserContext';
import NavBar from '../../components/NavBar';


function DashboardPage() {

    const { userAuth: { access_token, fullname, username } = {}, setUserAuth } = useContext(UserAuthContext);
    // let access_token = userAuth?.access_token;
    // let fullname = userAuth?.fullname;
    // let username = userAuth?.username;

    if (access_token === undefined || access_token === null) {
        window.location.href = '/login';
    }

    // const [account, SetAccount] = useState('');

    // useEffect(() => {
    //     getAccount(data => {
    //         SetAccount(data)
    //     });
    // });

    const features = [
        {
            title: "Design Your Ideas",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid rerum animi ducimus aut voluptates, quae odit harum",
        },
        {
            title: "Analyze Your Data",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid rerum animi ducimus aut voluptates, quae odit harum",
        },
        {
            title: "Develop Your Code",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid rerum animi ducimus aut voluptates, quae odit harum",
        },
        {
            title: "Freeze Your Moments",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid rerum animi ducimus aut voluptates, quae odit harum",
        }
    ];


    return (
        <Fragment>
            <NavBar />
            <section className='min-h-screen bg-gradient-to-r dark:from-gray-900 dark:to-slate-900 dark:text-slate-50 text-slate-900 from-gray-300 to-slate-300 lg:pt-32 lg:py-0 py-24'>
                <div className='md:max-w-screen-lg h-full md:mx-auto mb-8'>
                    <div className='flex flex-col md:grid md:grid-cols-2 justify-center items-center gap-4 p-4'>
                        {features.map((feature, index) => (
                            <div key={index} className="w-full lg:h-56 h-full rounded-lg dark:hover:bg-slate-800/50 hover:bg-slate-100/50 transition-all duration-200 border dark:border-neutral-700/40 border-neutral-400/40 p-6">
                                <div className="flex">
                                    <div>
                                        <h5 className='text-xl font-semibold'>{feature.title}</h5>
                                    </div>
                                </div>
                                <div className='flex mt-3 lg:mb-12 md:mb-10 mb-8'><p className='font-light text-sm leading-relaxed text-justify'>{feature.description} </p></div>
                            </div>
                        ))}

                    </div>
                </div>


            </section>
            {/* <Footer /> */}
        </Fragment >
    )
}

export default DashboardPage;

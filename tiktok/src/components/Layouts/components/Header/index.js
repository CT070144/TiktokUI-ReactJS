import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}></div>
            <Tippy
                interactive
                visible={false}
                render={(attrs) => (
                    <div className={cx('')} tabIndex="-1" {...attrs}>
                        HelloReactJS
                    </div>
                )}
            >
                <button>My button</button>
            </Tippy>
        </div>
    );
}

export default Header;

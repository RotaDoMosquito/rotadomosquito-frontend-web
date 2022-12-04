import { PositionType } from '../../../types/map';
import IconConfirmado from '../IconConfirmado';
import IconNaoConfirmado from '../IconNaoConfirmado';

interface Props extends PositionType {
    situacao: number;
}

export default function Icon({ situacao, position }: Props) {
    if (situacao === 1) {
        return <IconConfirmado position={position} />;
    }
    return <IconNaoConfirmado position={position} />;
}

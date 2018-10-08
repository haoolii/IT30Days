import { NoobEmployee } from './NoobEmployee';
import { NormalEmployee } from './NormalEmployee';

export class Facade {
	public employee1:NoobEmployee = new NoobEmployee('Amy');
	public employee2:NormalEmployee = new NormalEmployee('Ben');
	public employee3:NoobEmployee = new NoobEmployee('Cherry');
	public employee4:NormalEmployee = new NormalEmployee('Dimo');
	
	RewardNormalEmployee():void{
		this.employee2.reward();
		this.employee4.reward();
	}
	punishmentMakeMistakeEmployee():void{
		this.employee1.punishmented();
		this.employee3.punishmented();
	}
}